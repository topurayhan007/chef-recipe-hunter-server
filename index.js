const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const tips = require("./data/cooking-tips.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef's Den is running..");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/tip", (req, res) => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  res.send(randomTip);
});

app.listen(port, () => {
  console.log("Chef's Den API is running on port ", port);
});
