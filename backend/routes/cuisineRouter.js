const express = require("express");
const Cuisine = require("../models/cuisine");

const cuisineRouter = express.Router();

cuisineRouter
  .route("/")
  .get((req, res, next) => {
    Cuisine.find({})
      .then(
        (cuisine) => {
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
    const cuisine = {
      name: req.body.cuisine,
    };

    Cuisine.create(cuisine)
      .then(
        (c) => {
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
