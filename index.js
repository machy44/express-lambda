const express = require("express");
const PORT = 3003;


const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/:id", (req, res) => {
  res.json({
    id: req.params.id
  })
})