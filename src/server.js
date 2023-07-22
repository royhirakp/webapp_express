const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors
app.use(cors());

const route = require("./routes/index");

app.use(route);
app.use("*", (req, res) => {
  res.json({ error: "404 Error!!!" });
});

module.exports = app;
