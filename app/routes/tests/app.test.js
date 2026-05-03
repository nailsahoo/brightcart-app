const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  test('GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /checkout without key', async () => {
    const res = await request(app).post('/checkout');
    expect(res.statusCode).toBe(500);
  });
});
