const { Router } = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const validationFile = require('../middleware/validationFile');
const { repositories } = require('../database');

const { ImportationRepository } = repositories;

const router = new Router();

router.post('/upload', uploadMiddleware('local'), validationFile, (req, res, next) => {
  const fileFolder = req.file.destination.split('/');
  const uuid = fileFolder[fileFolder.length - 1];
  return ImportationRepository.create(uuid, req.file.destination, 'offers', 123)
    .then((result) => {
      console.log(result);
      res.send('Thank you for the file');
    }).catch((err) => {
      next(err);
    });
});

module.exports = router;
