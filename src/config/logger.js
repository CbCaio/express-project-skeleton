const fs = require('fs');
const winston = require('winston');
const expressWinston = require('express-winston');
const { environment } = require('./');
const _ = require('lodash');

const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

winston.handleExceptions(
  new winston.transports.File({
    filename: `${logDir}/uncaughtExceptions.log`,
  })
);

const timestampFormat = () => (new Date()).toLocaleTimeString({
  options: {
    hour12: false,
  },
});

const logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
      timestamp: timestampFormat,
      level: 'info',
    }),
    new winston.transports.File({
      name: 'allLogs',
      filename: `${logDir}/results.log`,
      timestamp: timestampFormat,
      eol: '\n', // for *NIX OSs, or `eol: ‘rn’,` for Windows
      level: environment === 'development' ? 'debug' : 'info',
    }),
    new winston.transports.File({
      name: 'infoLogs',
      filename: `${logDir}/infoLogs.log`,
      level: 'info',
      timestamp: timestampFormat,
      eol: '\n',
    }),
    new winston.transports.File({
      name: 'warnLogs',
      filename: `${logDir}/warnLogs.log`,
      level: 'warn',
      timestamp: timestampFormat,
      eol: '\n',
    }),
    new winston.transports.File({
      name: 'sillyLogs',
      filename: `${logDir}/sillyLogs.log`,
      level: 'silly',
      timestamp: timestampFormat,
      eol: '\n',
    }),
  ],
});

// Place the express-winston LOGGER before the router.
const loggerRouter = expressWinston.logger({
  transports: _.values(logger.transports),
});

// Place the express-winston ERRORLOGGER after the router.
const errorLoggerRouter = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
    new winston.transports.File({
      name: 'errorLogs',
      filename: `${logDir}/errorLogs.log`,
      timestamp: timestampFormat,
      eol: '\n',
    }),
  ],
});

module.exports = {
  loggerRouter,
  errorLoggerRouter,
  logger,
};
