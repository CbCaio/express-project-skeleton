// const { mongoose } = require('../db/mongoose');
//const mongoose = require('mongoose');

const Importation = require('../models/importation');

module.exports = {
  createImportation(uuid, fileLocation, type, userId) {
    const importation = new Importation({ uuid, userId, type, location: fileLocation });
    return importation.save();
  },
};
