const Products = require('../models/Product');

exports.createEvent = (req, res, next) => {
  const {
    id,
    name,
    price,
    available,
  } = req.body;


  const product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    available: req.body.available,  
  };

  Product.create(product)
    .then((newProduct) => {
      res.send({ productId: newProduct._id });
    })
    .catch((err) => {
      next(err);
    });
};