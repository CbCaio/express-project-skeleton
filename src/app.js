const Express = require('express');

const healthCheckRouter = require('./routers/healthCheck');

const app = new Express();

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
