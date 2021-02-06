// short urls to redirect to long urls
const express = require("express");

const routerIndex = express.Router();

routerIndex.get("/", (req, res) => {
  res.json({ msg: "index router" });
});

module.exports = routerIndex;
