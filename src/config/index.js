const environmentVariables = require('./applicationConfig');
const logger = require('./logger');
const dataConfig = require('./databaseConfig');
const applicationConfig = require('./applicationConfig');

module.exports = {
  env: environmentVariables,
  logger,
  allDatabaseConfig: dataConfig,
  runningDatabaseConfig: applicationConfig.URL_MONGO,
};
