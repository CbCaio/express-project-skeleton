const Express = require('express');
const config = require('./config');
const auth = require('./config/auth');
const healthCheckRouter = require('./routers/healthCheck');
const loginRouter = require('./routers/login');

const app = new Express();

// --- LOGGER ---
app.use(config.logger.loggerRouter);
// ------

app.set('json spaces', 2);

// --- VALIDATOR MIDDLEWARE ---

// ------

// --- CONTRACTS ---

// ------

// --- OPEN ROUTES (NO AUTH) ---

app.use(healthCheckRouter);
app.use(loginRouter);

app.use((req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(403).send('Access denied');
  }
  const token = req.headers.authorization;
  return auth.verifyToken(token)
    .then(next()).catch((err) => {
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json(err.message);
      }
      return res.status(500).json('Something wrong');
    });
});

// ------

// --- LOGGER ---
app.use(config.logger.errorLoggerRouter);
// ------

// --- APPLICATION ERROR HANDLER ---

// ------


module.exports = app;
