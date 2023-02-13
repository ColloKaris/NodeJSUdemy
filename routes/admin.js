const path = require('path');
const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post("/add-product", (req, res, next) => {
  //extract what the user sent
  console.log(req.body);
  //redirection
  res.redirect("/");
});

module.exports = router;
