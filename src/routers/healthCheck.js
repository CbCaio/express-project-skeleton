const { Router } = require('express');
const { logger } = require('../config').logger;

const router = new Router();

router.get('/_healthcheck', (req, res) => {
  // logger.info('just some info!');
  // logger.warn('fuck no, check this warn');
  // logger.error('told you!');
  // logger.silly('now good luck!');
  res.status(200).send('EUREKA!');
});

module.exports = router;
