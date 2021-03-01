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

productsRouter.route('/:id')
  .get((req, res, next) => {
    Product.findOne({id:req.params.id}, (err, product) => {
      if (err) {
        next(err);
      } else if (product) {
        res.send(product);
      } else {
        res.sendStatus(404);
      }
    });
  });

module.exports = productsRouter;