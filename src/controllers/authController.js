const auth = require('../config/auth');

exports.login = (req, res) => {
  const token = auth.encodeToken('word');
  const code = `bearer ${token}`;
  req.headers.authorization = code;
  // res.json({ token });
  res.status(200).send({ code });
};

exports.logout = (req, res) => {
  if ((req.headers && req.headers.authorization)) {
    delete req.headers.authorization;
  }
  res.status(200).json({
    status: 'Logout',
  });
};

exports.isLoggedIn = (req, res, next) => {
  if (auth.ensureAuthenticated(req, res)) {
    next();
    return;
  }
  res.status(400).json({
    status: 'Please log in',
  });
};
