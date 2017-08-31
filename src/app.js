const Express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');

const healthCheckRouter = require('./routers/healthCheck');

const app = new Express();

// --- LOGGER ---
app.use(config.logger.loggerRouter);
// ------

app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --- VALIDATOR MIDDLEWARE ---

// ------

// --- CONTRACTS ---

// ------

// --- OPEN ROUTES (NO AUTH) ---

app.use(healthCheckRouter);

// ------

// --- LOGGER ---
app.use(config.logger.errorLoggerRouter);
// ------

// --- APPLICATION ERROR HANDLER ---

// ------


module.exports = app;
