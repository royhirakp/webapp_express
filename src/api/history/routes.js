const express = require("express");
const historyModel = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await historyModel.find();
    res.json({ data });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/post", async (req, res) => {
  try {
    await historyModel.create({
      date: "10+12",
      time: "10.02",
      totalPrice: "51111",
      listOfProducts: [{ key: "data" }],
    });
    res.json({ c: "created" });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
