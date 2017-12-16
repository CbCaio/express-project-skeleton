const db = require('../db').mongoose;

module.exports = {
  create(uuid, fileLocation, type, userId) {
    const importation = db.model('Importation').create({ uuid, userId, type, location: fileLocation });
    return importation;
  },
};
