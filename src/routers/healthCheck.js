const { Router } = require('express');
const { logger } = require('../config').logger;
const authController = require('../controllers/authController');

const router = new Router();

router.get('/_healthcheck', (req, res) => {
  // logger.info('just some info!');
  // logger.warn('fuck no, check this warn');
  // logger.error('told you!');
  // logger.silly('now good luck!');
  res.status(200).send('EUREKA!');
});

router.post('/login', authController.login);

router.get('/isAuthenticated', authController.isLoggedIn, (req, res) => {
  res.status(200).send('I authenticated!');
});

router.post('/logout', authController.logout);

module.exports = router;
