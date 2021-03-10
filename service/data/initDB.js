/**
 * Database initialization script. Run `node ./initDB.js`. Does not delete
 * existing data.
 */

const mongoose = require('mongoose');
require('dotenv').config();

const mockProducts = require('./mockData');
const mockUsers = require('./profileData');


const Product = require('../models/Product');
const Profile = require('../models/Profile');

mockProducts.productList.forEach((product) => {
  Product.create(product).catch((err) => console.log(err));
});

mockUsers.profiles.forEach((profile) => {
  Profile.create(profile).catch((err) => console.log(err));
});

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@st-helens.prav3.mongodb.net/offerup?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log('Connected successfully'); },
    (err) => { console.log(`Connection failed with ${err}`); },
  );

setTimeout(() => mongoose.connection.close(), 2000);
