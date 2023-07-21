const express = require("express");
const ProductModel = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await ProductModel.find();
    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
  // res.json({ d: "dataaa100000000000" });
});

router.get("/post", async (req, res) => {
  try {
    await ProductModel.create({
      price: "PRICE",
      catagory: "{ required: true, type: String }",
      Qty: "{ required: true, type: String }",
    });
    res.json({ c: "created" });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
