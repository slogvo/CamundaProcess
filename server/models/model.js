const mongoose = require("mongoose");

//category
const categorySchema = new mongoose.Schema({
  idSP: {
    type: String,
    required: true,
    unique: true,
  },
  nameSP: {
    type: String,
    required: true,
    unique: true,
  },
  valueSP: {
    type: Number,
    required: true,
  },
  valueSP: {
    type: Number,
    required: true,
  },
  reAmount: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
  },
});

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
