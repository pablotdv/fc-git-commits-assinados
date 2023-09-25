const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('GET /', () => {
  it('should respond with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World!');
  });
});
