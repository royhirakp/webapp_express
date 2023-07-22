const express = require("express");
const fs = require("fs");

const ProductModel = require("./model");
const router = express.Router();
const upload = require("../../utils/multerConfig");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    await ProductModel.create({
      price: req.body.price,
      catagory: req.body.catagory,
      Qty: req.body.Qty * 1,
      image: {
        data: fs.readFileSync("public/image/" + req.file.filename),
        contentType: "image/png",
      },
    });
    res.status(201).json({ message: "Product created" });
  } catch (error) {
    console.error("Error while creating product:", error);
    res.status(500).json({ message: "faild to create" });
  }
});

// get all the data
//NB: HAVE TO ADD PAGINATION
router.get("/", async (req, res) => {
  try {
    let data = await ProductModel.find({});
    res.status(200).json({ data });
  } catch (error) {
    console.error("error=>", error);
    res
      .status(500)
      .json({ status: "error", messege: "error! fild to fetch data!!" });
  }
});

//get single product by a id
router.get("/:id", async (req, res) => {
  try {
    let data = await ProductModel.find({ _id: req.params.id });
    res.status(200).json({ data });
  } catch (error) {
    console.error("error=>", error);
    res
      .status(500)
      .json({ status: "error", messege: "error! fild to fetch data!!" });
  }
});

// update product Qty after mock payment
router.put("/", async (req, res) => {
  try {
    const updateOperations = req.body.cart.map(({ id, reqQty }) => ({
      updateOne: {
        filter: { _id: id },
        update: { $inc: { Qty: -reqQty } },
      },
    }));

    // console.log(updateOperations[0].updateOne);
    // console.log(updateOperations[0].updateOne.update);

    const result = await ProductModel.bulkWrite(updateOperations);
    console.log(result);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      status: "error",
      messege: error.messege,
    });
  }
});

module.exports = router;
