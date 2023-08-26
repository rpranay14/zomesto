const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuItems = new Schema({
  dishCategory: {
    type: String,
  },
  dishes: [
    {
      dishName: {
        type: String,
      },
      dishPrice: {
        type: Number,
      },
      dishDiscription: {
        type: String,
      },
      dishPhoto: {
        type: String,
      },
      dishType: {
        type: String,
      },
    },
  ],
});

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
    },
    restaurantType: {
      type: String,
    },
    delivery: {
      type: Boolean,
    },
    dinein: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    cuisineid: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cuisine",
      },
    ],
    rating: {
      type: Number,
    },

    photos: { type: String },

    menu: [menuItems],
  },
  {
    timestamps: true,
  }
);

var Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
