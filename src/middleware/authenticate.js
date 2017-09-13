const auth = require('../config/auth');


const checkPayload = (payload, next) => {
  // create verification of payload is valid
  return next();
};

const authenticate = (req, res, next) => {
  if (!(req.header && req.header('authorization'))) {
    return res.status(403).send('Access denied');
  }
  const token = req.header('authorization');
  return auth.verifyToken(token)
    .then(payload => checkPayload(payload, next))
    .catch((err) => {
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json(err.message);
      }
      return res.status(500).json('Something wrong');
    });
};
module.exports = { authenticate };
