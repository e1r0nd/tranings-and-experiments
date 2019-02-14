const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__('db', db);
  it('shoud call saveUser with User object', () => {
    const email = 'some@email.com';
    const password = '123';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
