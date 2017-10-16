'use strict';

/**
 * Module dependencies
 */
let passport = require('passport'),
  LinkedInStrategy = require('passport-linkedin').Strategy,
  users = require('../../controllers/users.controller');

module.exports = function (config) {
  // Use linkedin strategy
  passport.use(new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    passReqToCallback: true,
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'picture-url'],
    scope: [
      'r_basicprofile',
      'r_emailaddress'
    ]
  },
  function (req, accessToken, refreshToken, profile, done) {
    // Set the provider data and include tokens
    let providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    // Create the user OAuth profile
    let providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      username: profile.username,
      profileImageURL: (providerData.pictureUrl) ? providerData.pictureUrl : undefined,
      provider: 'linkedin',
      providerIdentifierField: 'id',
      providerData: providerData
    };

    // Save the user OAuth profile
    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};