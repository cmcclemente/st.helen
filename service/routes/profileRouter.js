const express = require('express');
const profileRouter = express.Router();
const profileData = require('../data/profileData');

productsRouter.route('/')
.get((req, res, next) => {
    res.json(profileData.profiles);
})
.post((req, res, next) => {
    next("An error");
})

/*profileRouter.route('/:id')
.get((req, res, next) => { 
    res.sendStatus(501);
})
.put(req, res, next) => { 
    res.sendStatus(501);
})
.delete(req, res, next) => { 
    res.sendStatus(501);
})*/

module.exports = profileRouter