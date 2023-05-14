const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path:'/admin/add-product'})
});

router.post("/add-product", (req, res, next) => {
  //extract what the user sent
  products.push({ title: req.body.title });
  //redirection
  res.redirect("/");
});

//module.exports = router;
exports.routes = router;
exports.products = products;

//some changes aI should delete later on in the day