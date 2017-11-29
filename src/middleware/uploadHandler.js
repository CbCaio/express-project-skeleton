const multer = require('multer');
const fs = require('mkdir-recursive');
const helper = require('../utils/helper');

const isvalidate = (folder) => {
  fs.mkdirSync(folder, true);

  return folder;
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folder = helper.getNewfolder('my-uploads');
    cb(null, isvalidate(folder));
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

const uploadHandler = multer({ storage });

module.exports = uploadHandler;
