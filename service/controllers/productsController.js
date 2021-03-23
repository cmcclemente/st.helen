const Products = require('../models/Product');

exports.createEvent = (req, res, next) => {
  const {
    name,
    price,
    areaCode,
    available,
  } = req.body;


  const product = {
    name: req.body.name,
    price: req.body.price,
    areaCode: req.body.areaCode,
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
