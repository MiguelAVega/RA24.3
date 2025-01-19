// test/index.test.js (Test file)
const request = require('supertest');
const server = require('../index'); // Import the server

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World');
  });

    afterAll((done) => {
        server.close(done)
    })
});