const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Destination", destinationSchema);