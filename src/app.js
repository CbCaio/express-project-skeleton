const Express = require('express');
const config = require('./config');
const RateLimit = require('express-rate-limit');

const healthCheckRouter = require('./routers/healthCheck');
const loginRouter = require('./routers/login');

const app = new Express();

var limiter = new RateLimit({
    windowMs: 15*60*1000, // 15 minutes 
    max: 5, // limit each IP to 100 requests per windowMs 
    delayMs: 0 // disable delaying - full speed until the max limit is reached 
  });

 app.use(limiter);

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

// ------

// --- LOGGER ---
app.use(config.logger.errorLoggerRouter);
// ------

// --- APPLICATION ERROR HANDLER ---

// ------


module.exports = app;
