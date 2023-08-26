const express = require("express");
const Cuisine = require("../models/cuisine");

const cuisineRouter = express.Router();

cuisineRouter
  .route("/")
  .get((req, res, next) => {
    Cuisine.find({})
      .then(
        (cuisine) => {
          console.log(cuisine);
          res.json({ success: true, cuisine: cuisine });
        },
        (error) => {
          res.status(400).json({ success: false, message: error });
        }
      )
      .catch((error) =>
        res.status(400).json({ success: false, message: error })
      );
  })
  .post((req, res, next) => {
    console.log(req.body.cuisine);
    const cuisine = {
      name: req.body.cuisine,
    };
    console.log(cuisine);
    Cuisine.create(cuisine)
      .then(
        (c) => {
          console.log(c);
          res.status(200).json({ success: true, cuisine: c });
        },
        (error) => {
          res.status(400).json({ success: false, message: error });
        }
      )
      .catch((error) =>
        res.status(400).json({ success: false, message: error })
      );
  });

module.exports = cuisineRouter;
