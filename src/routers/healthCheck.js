const { Router } = require('express');

const router = new Router();

router.get('/_healthcheck', (req, res) => {
  res.status(200).send('EUREKA!');
});

module.exports = router;
