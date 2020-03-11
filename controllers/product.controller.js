const Product = require('../models/product.model');

// funcionamento 
exports.test = function (req, res) {
    res.send('Saudações');
};

exports.base = function (req, res) {
    res.send('This is the home page. Try /test or /create.');
};

exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Produto criado com sucesso')
    })
};