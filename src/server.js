const app = require("express")();
const cors = require("cors");

const route = require("./routes/index");
//cors
app.use(cors());
// registering routes
app.use(route);
app.use("*", (req, res) => {
  res.json({ k: "404" });
});

module.exports = app;
