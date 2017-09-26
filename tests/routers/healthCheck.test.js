const request = require('supertest');
const app = require('../../src/app');

describe('tests -> routers -> healthCheck', () => {
  it('It should response the GET method', async () => {
    const response = await request(app).get('/_healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('EUREKA!');
  });
});
