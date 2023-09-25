const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('GET /', () => {
  it('should respond with Hello World!', done => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Hello World!');
        done(err);
      });
  });
});
