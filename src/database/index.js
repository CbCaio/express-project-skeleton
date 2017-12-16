const mongoose = require('./mongoose/db');
const repositories = require('./mongoose/repositories');

module.exports = {
  db: mongoose,
  repositories,
};
