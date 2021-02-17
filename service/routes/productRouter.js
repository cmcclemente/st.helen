const express = require('express');
const productsRouter = express.Router();



const productsController = require('../controllers/productsController');
const Product = require('../models/Product');


productsRouter.route('/')
.get((req, res, next) => {
    Product.find({}, (err, products) => {
        if (err) {
        next(err);
      } else {
        res.send(products);
      }    
});
    });

module.exports = productsRouter;