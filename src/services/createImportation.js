const Importation = require('../models/importation');

module.exports = (uuid, fileLocation, type, userId) => {
  const importation = Importation.create({ uuid, userId, type, location: fileLocation });
  return importation;
};
