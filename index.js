const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const tips = require("./data/cooking-tips.json");
const featuredRecipes = require("./data/featured-recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef's Den is running..");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/featured-recipes", (req, res) => {
  res.send(featuredRecipes);
});

app.get("/chef-recipes/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id, typeof id);
  const selectedChef = chefs.find((chef) => chef.id === parseInt(id));
  // console.log(selectedChef);
  res.send(selectedChef);
});

app.get("/tip", (req, res) => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  res.send(randomTip);
});

app.listen(port, () => {
  console.log("Chef's Den API is running on port ", port);
});
