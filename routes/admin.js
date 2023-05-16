const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const productsController = require('../controllers/products');

const router = express.Router();



//we just pass a reference to the function and don't execute it
//it will be executed later
router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

//module.exports = router;
module.exports = router;