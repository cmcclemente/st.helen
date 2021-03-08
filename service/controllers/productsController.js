const Products = require('../models/Product');

exports.createEvent = (req, res, next) => {
  const {
    name,
    price,
    available,
  } = req.body;


  const product = {
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
