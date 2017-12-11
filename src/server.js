
const { env } = require('./config');


// Import all of the models
// require('./models/importation');
// ------

const app = require('./app');

app.listen(env.port, () => console.log(`${env.appName} server's started at ${env.port}`));

