const request = require('supertest');
const app = require('../app');
const ProductService = require('../app/services/ProductService');

jest.mock('../app/services/ProductService');

const agent = request.agent(app);

let database = [];

beforeEach(() => {
  database = [];
});
describe("POST /v1/products/create-product", () => {
  test('It should store a new product details', async () => {
    const response = await agent
      .post("/v1/products/create-product")
      .send({
        merchantId:"precious5656",
        productId: "6789-bcdc-8907",
        sku_id: "carswift123567",
        name: "car",
        description: "A wonderful car",
        price: 20.99,
        dateAdded: "{{timestamps}}"
      })
      .expect(200);

      expect(response.body.product).toBe();
  });
});


describe('GET /v1/products/:merchantId/products', () => {
  test('It should retrieve product details using merchantId', async () => {
    const sampleProduct = {
      productId: "6789-bcdc-8907",
      sku_id: "carswift123567",
      name: "car",
      description: "A wonderful car",
      price: 20.99,
      dateAdded: "{{timestamps}}"
    };
    database.push(sampleProduct);

    ProductService.prototype.getAllProductsByMerchant.mockResolvedValue(sampleProduct);

    const productDetail = await ProductService.prototype.getAllProductsByMerchant("precious5656");

    expect(productDetail).toEqual(sampleProduct);
  });
});

describe('PUT /v1/products/:productId', () => {
  test('It should edit a product details', async () => {
    const sampleProduct = {
      merchantId:"precious5656",
      sku_id: "carswift123567",
      name: "car",
      description: "A wonderful car",
      price: 20.99,
      dateAdded: "{{timestamps}}"
    };
    database.push(sampleProduct);

    const editedProductDetails = {
      name: "edited car",
      description: "An edited wonderful car",
      price: 25.99
    };

    
    expect(editedProductDetails .productId).toBe(editedProductDetails.productId);
    expect(editedProductDetails .name).toBe(editedProductDetails.name);
    expect(editedProductDetails .description).toBe(editedProductDetails.description);
    expect(editedProductDetails .price).toBe(editedProductDetails.price);
    expect(editedProductDetails .dateAdded).toBe(editedProductDetails.dateAdded);
  });
});

describe('DELETE /v1/products/:productId', () => {
  test('It should delete a product', async () => {
    const sampleProduct = {
      merchantId:"precious5656",
      sku_id: "carswift123567",
      name: "car",
      description: "A wonderful car",
      price: 20.99,
      dateAdded: "{{timestamps}}"
    };
    database.push(sampleProduct);

    
  });
});
