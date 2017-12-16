module.exports = {
  appName: process.env.AppName || 'skeleton-project',
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 9000,
  hostName: process.env.HostName,
  tokenkey: 'secret key',
  URL_MONGO: 'mongodb://root-import:1234qwer@ds123556.mlab.com:23556/importation-sheet',
  aws: {
    accessKeyId: process.env.APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.APP_AWS_REGION,
  },
  uploadBucket: process.env.UPLOAD_BUCKET || 'importation-sheet-dev',
};