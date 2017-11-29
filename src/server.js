
const { env } = require('./config');
const mongoose = require('mongoose');

mongoose.createConnection(env.URL_MONGO);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Import all of the models
require('./models/importation');
// ------

const app = require('./app');

app.listen(env.port, () => console.log(`${env.appName} server's started at ${env.port}`));

