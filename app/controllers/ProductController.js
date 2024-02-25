"use strict";
const ProductService = require('../services/ProductService');

const productService = new ProductService();

exports.getAllProductsByMerchant = (req, res) => {
    const { merchantId } = req.params;
    const products = productService.getAllProductsByMerchant(merchantId);
    res.json(products).status(200)
};

exports.createProduct = (req, res) => {
    const product = req.body;
    productService.createProduct(product);
    res.json(product).status(201);
};

exports.editProduct = (req, res) => {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const success = productService.editProduct(productId, updatedProduct);
    if (success) {
        res.send('Product updated successfully');
    } else {
        res.status(404).send('Product not found');
    }
};

exports.deleteProduct = (req, res) => {
    const {productId} = req.params;
    productService.deleteProduct(productId);
    res.send('Product deleted successfully');
};
