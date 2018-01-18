const Express = require('express');
const config = require('./config');
const RateLimit = require('express-rate-limit');
const healthCheckRouter = require('./routers/healthCheck');
const loginRouter = require('./routers/login');
const upload = require('./routers/upload');
const errorHandler = require('./error-handler')();

const app = new Express();

const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes 
  max: 5, // limit each IP to 100 requests per windowMs 
  delayMs: 0, // disable delaying - full speed until the max limit is reached 
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
app.use(upload);

// ------

// --- LOGGER ---
app.use(config.logger.errorLoggerRouter);
// ------

// --- APPLICATION ERROR HANDLER ---

app.use((err, req, res, next) => {
  if (err instanceof errorHandler.HttpError) {
    return next(err);
  }

  if (err instanceof errorHandler.NotFoundError) {
    return next(err);
  }

  if (!(err instanceof Error)) {
    const uncaughtError = new errorHandler.HttpError(500, 'Something went wrong');
    uncaughtError.custom = err;
    return next(uncaughtError);
  }

  let newError = null;

  if (err.error && err.error.errors) {
    newError = new errorHandler.HttpError(err.statusCode, err.message, err.error.errors);
  }

  if (!newError) {
    newError = new errorHandler.HttpError(500, err.message);
  }

  newError.custom = err;
  return next(newError);
});

app.use(errorHandler.errorHandlerMiddleware);
// ------

module.exports = app;
