const mongoose = require("mongoose");

const allDataSchema = new mongoose.Schema({
      code: {
            type: String,
            require: true,
            unique: true
      },
      name: {
            type: String,
            require: true
      },
      type: {
            type: String,
            require: true
      },
      availability: {
            type: Boolean,
            require: true
      },
      needing_repair: {
            type: Boolean,
            require: true
      },
      durability: {
            type: Number,
            require: true
      },
      max_durability: {
            type: Number,
            require: true
      },
      mileage: {
            type: Number,
            require: true
      },
      price: {
            type: Number,
            require: true
      },
      minimum_rent_period: {
            type: Number,
            require: true
      },
      returnPrice: {
            type: Number,
      }

});

module.exports = mongoose.model("allProducts", allDataSchema);