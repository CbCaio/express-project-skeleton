const validationFile = (req, res, next) => {
  if (req && !req.file) {
    return res.status(400).json('Missing file');
  }
  return next();
};

module.exports = validationFile;
