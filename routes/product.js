"use strict";
const express = require("express");
const router =express.Router();
const controller = require("../app/controllers/ProductController")

router.get("/:merchantId/products", controller.getAllProductsByMerchant);
router.post("/create-product", controller.createProduct);
router.put("/:productId", controller.editProduct);
router.delete("/:productId", controller.deleteProduct);

module.exports = router;


