const app = require('./app');
const { env } = require('./config');

app.listen(env.port, () => console.log(`${env.appName} server's started at ${env.port}`));

