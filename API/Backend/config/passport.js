const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user'); // Tu modelo de usuario
const { secretOrKey } = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            // Buscamos al usuario por el ID que viene en el token
            User.findById(jwt_payload.id, (err, user) => {
                if (err) return done(err, false);
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        })
    );
};