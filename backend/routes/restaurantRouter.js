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
  .post((req, res, next) => {
    console.log(req.body.filter);

    const query = {};
    if (req.body.filter.cuisine.length !== 0) {
      query.cuisineid = { $in: req.body.filter.cuisine };
    }
    if (req.body.filter.rating === 1) {
      query.rating = { $gte: 3.5 };
    }
    if (req.body.filter.rating === 2) {
      query.rating = { $gte: 4 };
    }
    if (req.body.filter.rating === 3) {
      query.rating = { $gte: 4.5 };
    }
    if (req.body.filter.costperperson[1] === 1000) {
      query.costperperson = { $gte: req.body.filter.costperperson[0] };
    }
    if (req.body.filter.costperperson[1] !== 1000) {
      query.costperperson = {
        $gte: req.body.filter.costperperson[0],
        $lte: req.body.filter.costperperson[1],
      };
    }
    const sort = {};
    switch (req.body.filter.sortBy) {
      case "Popularity":
        sort.createdAt = -1;
        break;
      case "Rating:High to Low":
        sort.rating = 1;
        break;
      case "Delivery Time":
        sort.deliverytime = 1;
        break;
      case "Cost:High to Low":
        sort.costperperson = -1;
        break;
      case "Cost:Low to High":
        sort.costperperson = 1;
        break;
      // Add more cases for other fields to sort by
      // Default to sorting by createdAt
    }

    Restaurant.find(query)
      .populate("cuisineid")
      .sort(sort)
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

    const restro = await Restaurant.create(newRestro);
    res.status(200).json({ success: true });
  });

restaurantRouter.route("/error").get((req, res, next) => {
  error = new Error("Error found in the code");
  error.status = 404;
  return next(error);
});
restaurantRouter.route('/searchrestaurant').post(async(req,res,next)=>{
  const {search}=req.body;
  console.log(search)
  try{
    const restaurants=await Restaurant.find({
      $or:[{
        name:{$regex:search,$options:"i"}
     
      },{   'menu.dishes.dishName':{$regex:search,$options:"i"}}]
    },{name:1,delivery:1,dinein:1,address:1,photos:1})
    return res.status(200).json({success:true,data:restaurants})
  }
  catch(error){
    return res.status(500).json({success:false,error:"some error occured"})
  }
 
})
module.exports = restaurantRouter;
