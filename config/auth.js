/**
 * Created by Stanislav on 01.12.2014.
 */

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./user');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        done(null, User);
    });

    passport.use('loginStrategy', new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback : true
    }, function (req, login, password, done) {
        if (User.login !== login){
            return done(null, false);
        }
        if (User.password !== password){
            return done(null, false);
        }

        return done(null, User);
    }));
};