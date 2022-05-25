var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Hello from Abhinav Chauhan This is an assignment made on aws,nginx,jenkins and git Thank You', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('Hello from Abhinav Chauhan This is an assignment made on aws,nginx,jenkins and git Thank You', done);
 });
});