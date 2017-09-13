const { Router } = require('express');
const auth = require('../config/auth');

const router = new Router();

router.get('/login', (req, res) => {
  const token = auth.encodeToken('test');
  res.header('authorization', token).send('ok!');
});

module.exports = router;
