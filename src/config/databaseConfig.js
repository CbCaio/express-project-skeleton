
const devConfig = (connectionString) => { // mongodb://root-import:1234qwer@ds123556.mlab.com:23556/importation-sheet
  let config = connectionString;
  if (!config) {
    config = 'mongodb://root-import:1234qwer@ds123556.mlab.com:23556/importation-sheet';
  }

  return config;
};

const prodConfig = (connectionString) => {
  let config = connectionString;
  if (!config) {
    config = 'mongodb://root-import:1234qwer@ds123556.mlab.com:23556/importation-sheet';
  }

  return config;
};

module.exports = {
  development: devConfig(process.env.DB_CONNECTION_STRING),
  production: prodConfig(process.env.DB_CONNECTION_STRING),
};
