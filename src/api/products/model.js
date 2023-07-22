const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const productSchma = new Schema({
  price: { required: true, type: String },
  catagory: { required: true, type: String },
  image: {
    data: Buffer,
    contentType: String,
  },
  Qty: { required: true, type: Number },
});
const model = mongoose.model("product", productSchma); // NOT COMPLITED
module.exports = model;
