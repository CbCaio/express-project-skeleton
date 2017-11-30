// const { mongoose } = require('../db/mongoose');
const mongoose = require('mongoose');

const Importation = mongoose.model('Importation');

module.exports = {
  createImportation(uuid, fileLocation, type, userId) {
    const importation = new Importation({ uuid, userId, type, location: fileLocation });
    return importation.save();
  },
};
