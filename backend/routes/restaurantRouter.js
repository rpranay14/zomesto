const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const Restaurant = require("../models/restaurant");

const restaurantRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public", "upload"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

restaurantRouter
  .route("/")
  .get((req, res, next) => {
    Restaurant.find({})
      .populate("cuisineid")
      .exec()
      .then(
        (restaurant) => {
          res.json({ success: true, restaurant: restaurant });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(upload.any(), async (req, res, next) => {
    const restaurant = req.body;
    console.log(req.files);

    const cuisines = req.body.cuisine.map((cuisine) =>
      mongoose.Types.ObjectId(cuisine)
    );
    const restroPhoto = `/upload/${
      req.files.filter((dishPhoto) => dishPhoto.fieldname === "photos")[0]
        .filename
    }`;

    for (let i = 0; i < restaurant.menu.length; i++) {
      for (let j = 0; j < restaurant.menu[i].dishes.length; j++) {
        const photo = `/upload/${
          req.files.filter(
            (dishPhoto) =>
              dishPhoto.fieldname ===
              `dishPhotos-${restaurant.menu[i].dishes[j].dishName}`
          )[0].filename
        }`;
        restaurant.menu[i].dishes[j].dishPhoto = photo;
      }
    }
    const newRestro = {
      name: req.body.name,
      restaurantType: req.body.restaurantType,
      delivery: req.body.deliveryAvailable,
      dinein: req.body.dineIn,
      description: req.body.description,
      address: req.body.address,
      city: req.body.city,
      city: req.body.state,
      cuisineid: cuisines,
      rating: req.body.rating,
      photos: restroPhoto,
      menu: req.body.menu,
    };
    console.log(newRestro);

    const restro = await Restaurant.create(newRestro);
    res.status(200).json({ success: true });
  });

restaurantRouter.route("/error").get((req, res, next) => {
  error = new Error("Error found in the code");
  error.status = 404;
  return next(error);
});
module.exports = restaurantRouter;
