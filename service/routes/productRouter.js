const express = require('express');
const productsRouter = express.Router();

const mockData = require('../data/mockData');

productsRouter.route('/')
.get((req, res, next) => {
    res.json(mockData.productList);
})
.post((req, res, next) => {
    next("An error");
});

/*productsRouter.route('/:id')
.get((req, res, next) => { 
    res.sendStatus(501);
});
.put(req, res, next) => { 
    res.sendStatus(501);
});
.delete(req, res, next) => { 
    res.sendStatus(501);
});*/

module.exports = productsRouter;