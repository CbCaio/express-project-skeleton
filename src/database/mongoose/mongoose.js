const mongoose = require('mongoose');
const { runningDatabaseConfig } = require('../../config');

mongoose.Promise = global.Promise;
mongoose.connect(runningDatabaseConfig, { useMongoClient: true });
mongoose.connection.on('error', (err) => {
  console.error(`Error -> ${err.message}`);
});

module.exports = { mongoose };
