const express = require('express');
const profileRouter = express.Router();

const profileController = require('../controllers/profileController');
const Profile = require('../models/Profile');

profileRouter.route('/')
.get((req, res, next) => {
    Profile.find({}, (err, profile) => {
        if (err) {
        next(err);
      } else {
        res.send(profile);
      }    
});
    });

module.exports = profileRouter;
