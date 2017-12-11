const helper = {};
const uuidv4 = require('uuid/v4');
const path = require('path');
const { env } = require('../config');

helper.getNewfolder = (folderName, type) => {
  const folderBase = (type === 'aws') ? env.uploadBucket : path.join(`${__dirname}../..`);
  const today = (new Date()).toISOString().substring(0, 10);
  return `${folderBase}/${folderName}/${today}/${uuidv4()}`;
};

module.exports = helper;
