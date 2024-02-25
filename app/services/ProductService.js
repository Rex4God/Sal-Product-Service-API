"use strict"

class ProductService {
    constructor() {
        this.products=[];
    }

    getAllProductsByMerchant(merchantId) {
        return this.products.reduce((acc, product) => {
            if (product.merchantId === merchantId) {
                acc.push(product);
            }
            return acc;
        }, []);
    }
    
    createProduct(product) {
        this.products.push(product);
    }

    editProduct(productId, updatedProduct) {
        const index = this.products.findIndex(product => product.productId === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            return true;
        }
        return false;
    }

    deleteProduct(productId) {
        this.products = this.products.filter(product => product.productId !== productId);
    }
}

module.exports = ProductService;
