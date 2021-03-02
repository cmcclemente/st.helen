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
})
    })
.post((req, res, next) => {
    Profile.create(req.body, (err, newProfile) => {
      if (err) { next(err) }
      res.status(200);
      res.send(newProfile);
    })
  })

profileRouter.route('/:id')
  .get((req, res, next) => {
    Profile.findById(req.params.id, (err, profile) => {
      if (err) {
        next(err);
      } else if (profile) {
        res.send(profile);
      } else {
        res.sendStatus(404);
      }
    })
  })
.put((req, res, next) => {
    console.log('request body ', req.body);
    Profile.findByIdAndUpdate(req.params.id, req.body, (err, profile) => {
      if (err) { next(err) }
      else if (profile) {
        Profile.findById(req.params.id, (err, profile) => { res.send(profile) });
      } else {
        res.status(404);
        res.send({ error: `Couldn't find profile with id ${req.params.id}` });
      }
    })
  })
.delete((req, res, next) => {
    Profile.findByIdAndDelete(req.params.id, (err, profile) => {
      if (err) { next(err) }
      else if (profile) {
        res.sendStatus(204);
      } else {
        res.status(404);
        res.send({ error: `Couldn't find profile with id ${req.params.id}` });
      }
    })
  });
module.exports = profileRouter;
