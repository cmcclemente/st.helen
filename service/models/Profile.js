const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  activeUser: Boolean,
  
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;