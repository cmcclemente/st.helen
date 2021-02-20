const Products = require('../models/Profile');

exports.createEvent = (req, res, next) => {
  const {
    name,
    email,
    activeUser,
  } = req.body;


  const profile = {
    name: req.body.name,
    email: req.body.email,
    activeUser: req.body.activeUser,  
  };

  Profile.create(profile)
    .then((newProfile) => {
      res.send({ profile: newProfile.email });
    })
    .catch((err) => {
      next(err);
    });
};