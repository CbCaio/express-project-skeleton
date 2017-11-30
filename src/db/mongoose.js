const mongoose = require('mongoose');
const { env } = require('../config');

mongoose.Promise = global.Promise;
mongoose.connect(env.URL_MONGO, { useMongoClient: true });

module.exports = { mongoose };
