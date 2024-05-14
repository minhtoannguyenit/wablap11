const express = require('express');
const products = require('../data/products.json');
const path = require('path');

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get('/list', (req, res, next) => {
  res.json(products);
});

productRouter.get('/add', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
});

productRouter.use(express.urlencoded({ extended: true }));
productRouter.post('/save', (req, res, next) => {
  products.push(req.body);
  res.status(201).json(products);
});

module.exports = productRouter;