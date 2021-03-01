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
})
    })
.post((req, res, next) => {
    Product.create(req.body, (err, newProduct) => {
      if (err) { next(err) }
      res.status(200);
      res.send(newProduct);
    })
  })

productsRouter.route('/:id')
  .get((req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        next(err);
      } else if (product) {
        res.send(product);
      } else {
        res.sendStatus(404);
      }
    })
  })
.put((req, res, next) => {
    console.log('request body ', req.body);
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
      if (err) { next(err) }
      else if (product) {
        Product.findById(req.params.id, (err, product) => { res.send(product) });
      } else {
        res.status(404);
        res.send({ error: `Couldn't find product with id ${req.params.id}` });
      }
    })
  })
.delete((req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err, product) => {
      if (err) { next(err) }
      else if (product) {
        res.sendStatus(204);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find product with id ${req.params.id}` });
      }
    })
  });
module.exports = productsRouter;