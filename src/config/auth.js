const jwt = require('jsonwebtoken');
const moment = require('moment');
const promisify = require('es6-promisify');
const { env } = require('./');

module.exports = {
  encodeToken(word) {
    const payload = {
      exp: moment().add(1, 'days').unix(),
      iat: moment().unix(),
      sub: word,
    };
    return jwt.sign(payload, env.tokenkey);
  },

  verifyToken(token) {
    const verify = promisify(jwt.verify, jwt);
    return verify(token, env.tokenkey);
  },
};
