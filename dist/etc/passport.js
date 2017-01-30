'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        _user2.default.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new _passportLocal2.default({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick(function () {
            _user2.default.findOne({ 'local.username': email }, function (err, user) {
                if (err) return done(err);
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email already taken'));
                } else {
                    var newUser = new _user2.default();
                    newUser.local.username = email;
                    newUser.local.password = password;

                    newUser.save(function (err) {
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    passport.use('local-login', new _passportLocal2.default({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick(function () {
            _user2.default.findOne({ 'local.username': email }, function (err, user) {
                if (err) return done(err);
                if (!user) return done(null, false, req.flash('loginMessage', 'No User found'));
                if (user.local.password != password) {
                    return done(null, false, req.flash('loginMessage', 'inavalid password'));
                }
                return done(null, user);
            });
        });
    }));
};

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;