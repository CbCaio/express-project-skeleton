const { Router } = require('express');
const uploadHandler = require('../middleware/uploadHandler');
const importationService = require('../services/importationService');

const router = new Router();

router.post('/upload', uploadHandler.single('file'), (req, res) => {
  if (req.file) {
    const fileFolder = req.file.destination.split('/');
    const uuid = fileFolder[fileFolder.length - 1];
    return importationService.createImportation(uuid, req.file.destination, 'offers', 123)
      .then((result) => {
        console.log(result);
        res.send('Thank you for the file');
      });
  }
  return res.end('Missing file');
});

module.exports = router;
