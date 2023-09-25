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


describe('GET /2', () => {
  it('should respond with Hello World!', async () => {
    const response = await request(app).get('/2');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World!');
  });
});

describe('GET /3', () => {
  it('should respond with Hello World!', async () => {
    const response = await request(app).get('/3');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World!');
  });
});

describe('GET /4', () => {
  it('should respond with Hello World!', async () => {
    const response = await request(app).get('/4');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World!');
  });
});