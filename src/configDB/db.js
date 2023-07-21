require("dotenv").config();
let mongoose = require("mongoose");
let mongourl = process.env.mongo;
mongoose.connect(mongourl).then(() => {
  console.log("DB connected");
});
