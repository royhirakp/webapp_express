const express = require("express");
const app = express();

//route
const productsRoute = require("../api/products/routes");
const historyRoute = require("../api/history/routes");

app.use("/api/v1/products", productsRoute);
app.use("/api/v1/history", historyRoute);
module.exports = app;
