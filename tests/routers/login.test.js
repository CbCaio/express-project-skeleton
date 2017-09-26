const request = require('supertest');
const app = require('../../src/app');

describe('tests -> routers -> login', () => {
  it('It should response the GET method', async () => {
    const response = await request(app).get('/login');
    expect(response.status).toBe(200);
    expect(response.text).toBe('ok!');
    expect(response.header.authorization).toBeDefined();
  });
});

