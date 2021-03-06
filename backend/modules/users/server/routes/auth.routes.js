'use strict';

/**
 * Module dependencies
 */
let passport = require('passport');

module.exports = function (app) {
  // User Routes
  let users = require('../controllers/users.controller');

  // Setting up the users password api
  // app.route('/api/auth/forgot').post(users.forgot);
  // app.route('/api/auth/reset/:token').get(users.validateResetToken);
  // app.route('/api/auth/reset/:token').post(users.reset);

  // Setting up the users authentication api
  app.route('/api/auth/signup').post(users.signup);
  app.route('/api/auth/signin').post(users.signin);
  app.route('/api/auth/signout').get(users.signout);

  // Setting the oauth routes
  app.route('/api/auth/:strategy').get(users.oauthCall);
  app.route('/api/auth/:strategy/callback').get(users.oauthCallback);

};
