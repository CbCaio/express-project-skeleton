const { Router } = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware');
const { repositories } = require('../database');

const { ImportationRepository } = repositories;

const router = new Router();

router.post('/upload', uploadMiddleware('local'), (req, res) => {
  if (req.file) {
    const fileFolder = req.file.destination.split('/');
    const uuid = fileFolder[fileFolder.length - 1];
    return ImportationRepository.create(uuid, req.file.destination, 'offers', 123)
      .then((result) => {
        console.log(result);
        res.send('Thank you for the file');
      });
  }
  return res.end('Missing file');
});

module.exports = router;
