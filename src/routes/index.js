const express = require("express");
const app = express();

//route
const rRout = require("../api/products/routes");
const historyRoute = require("../api/history/routes");

app.use("/me", rRout);
app.use("/history", historyRoute);
module.exports = app;
