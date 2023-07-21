const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartHistoryScama = new Schema({
  date: { required: true, type: String },
  time: { required: true, type: String },
  totalPrice: { required: true, type: String },
  listOfProducts: { required: true, type: Array },
});
const model = mongoose.model("Carthistory", cartHistoryScama); // NOT COMPLITED
module.exports = model;
