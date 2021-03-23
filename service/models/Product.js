const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  areaCode: Number,
  available: Boolean,
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;