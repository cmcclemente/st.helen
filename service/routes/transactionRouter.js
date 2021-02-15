const express = require('express');
const transactionRouter = express.Router();
const transactionData = require('../data/transactionData');

transactionRouter.route('/')
.get((req, res, next) => {
    res.json(transactionData.transactions)
})
.post((req, res, next) => {
    next("An error")
})

/*profileRouter.route('/:id')
.get((req, res, next) => { 
    res.sendStatus(501)
})
.put(req, res, next) => { 
    res.sendStatus(501)
})
.delete(req, res, next) => { 
    res.sendStatus(501)
})*/

module.exports = transactionRouter