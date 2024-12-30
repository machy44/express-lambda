const express = require("express");
const serverless = require("serverless-http");
const PORT = 3003;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/:id", (req, res) => {
  res.json({
    id: req.params.id
  });
});

if (process.env.ENVIRONMENT === "lambda") {
  module.exports.handler = serverless(app);
} else {
  app.listen(PORT, () => {
    console.log(`Server has been booted up on port ${PORT}!`);
  });
}
