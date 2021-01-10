const express = require('express');
const route = express.Router();
const product = require('../controller/productController');
route.get('/', product.getProduct);
module.exports = route;
