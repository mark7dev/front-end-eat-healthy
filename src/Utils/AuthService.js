const request = require('superagent');

const AuthService = {
  isAuthenticated: false,
  authenticate(credentials, done, onError) {
    request
      .post('http://localhost:3000/apieh/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send(credentials)
      .then(function(response) {
        const { token, user } = response.body;

        if (token) {
          AuthService.isAuthenticated = true;
          localStorage.setItem('jwt', token);
          localStorage.setItem('nutritionist', user[0].nutritionist);
        }
      })
      .then(done)
      .catch(onError);
  },
  signout(done) {
    this.isAuthenticated = false;
    localStorage.removeItem('jwt');
    localStorage.removeItem('nutritionist');
    done();
  }
};

module.exports = AuthService;
