
const { env } = require('./config');
const { mongoose } = require('./db/mongoose');

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Import all of the models
require('./models/importation');
// ------

const app = require('./app');

app.listen(env.port, () => console.log(`${env.appName} server's started at ${env.port}`));

