const moment = require('moment');
const jwt = require('jwt-simple');

function encodeToken(word) {
  const playload = {
    exp: moment().add(1, 'days').unix(),
    iat: moment().unix(),
    sub: word,
  };
  return jwt.encode(playload, 'secret key');
}

function decodeToken(token) {
  const payload = jwt.decode(token, 'secret key');
  const now = moment().unix();
  // check if the token has expired
  if (now > payload.exp) return;
  return payload;
}

function ensureAuthenticated(req, res) {
  if (!(req.headers && req.headers.authorization)) {
    return false;
  }
  const header = req.headers.authorization.split(' ');
  const token = header[1];

  const payload = decodeToken(token);
  if (payload.sub) return true;
  return false;
}

module.exports = {
  encodeToken,
  decodeToken,
  ensureAuthenticated,
};
