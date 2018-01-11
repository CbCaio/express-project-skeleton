const AWS = require('aws-sdk');
const { accessKeyId, secretAccessKey, region } = require('../config/applicationConfig').aws;

const config = new AWS.Config({
  accessKeyId, secretAccessKey, region,
});

AWS.config.update(config);

module.exports = {
  s3: new AWS.S3({ apiVersion: '2006-03-01' }),
};
