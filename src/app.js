const Express = require('express');

const RateLimit = require('express-rate-limit');

const healthCheckRouter = require('./routers/healthCheck');

const app = new Express();

var limiter = new RateLimit({
    windowMs: 15*60*1000, // 15 minutes 
    max: 5, // limit each IP to 100 requests per windowMs 
    delayMs: 0 // disable delaying - full speed until the max limit is reached 
  });

 app.use(limiter);

app.set('json spaces', 2);

// --- VALIDATOR MIDDLEWARE ---

// ------

// --- CONTRACTS ---

// ------

// --- OPEN ROUTES (NO AUTH) ---

app.use(healthCheckRouter);

// --- APPLICATION ERROR HANDLER ---

// ------

module.exports = app;
