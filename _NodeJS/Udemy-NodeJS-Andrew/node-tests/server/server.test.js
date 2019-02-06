const request = require('supertest');
const app = require('./server').app;

describe('Server', () => {
  it('should return "hello world"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello world!')
      .end(done);
  });

  it('should return "404"', (done) => {
    request(app)
      .get('/404')
      .expect(404)
      .expect({
        message: 'Page not found.',
      })
      .end(done);
  });

  it('should return Users', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect([
        {
          name: 'Mike',
          age: 27,
        },
        {
          name: 'Andy',
          age: 25,
        },
      ])
      .end(done);
  });
});
