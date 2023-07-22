const express = require("express");
const historyModel = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await historyModel.find({});
    res.status(200).json({ data });
  } catch (error) {
    console.error("error=>", error);
    res
      .status(500)
      .json({ status: "error", messege: "error! fild to fetch data!!" });
  }
});

router.post("/", async (req, res) => {
  try {
    await historyModel.create({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      totalPrice: req.body.totalPrice * 1,
      userId: req.body.userId,
      listOfProducts: req.body.listOfProducts,
    });
    res.status(201).json({ message: "created" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "req faild " });
  }
});

module.exports = router;
