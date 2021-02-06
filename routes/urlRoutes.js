const express = require("express");

const routerUrl = express.Router();

routerUrl.get("/", (req, res) => {
  res.json({ msg: "url router" });
});

module.exports = routerUrl;
