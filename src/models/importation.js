
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImportationSchema = new Schema({
  uuid: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply an uuid',
  },
  userId: {
    type: String,
    required: 'Please supply a userId',
    trim: true,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
    required: 'Please supply an location file',
  },
});

module.exports = mongoose.model('Importation', ImportationSchema);
