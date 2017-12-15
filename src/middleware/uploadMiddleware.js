const multer = require('multer');
const fs = require('mkdir-recursive');
const helper = require('../utils/helper');
const multerS3 = require('multer-s3');
const { s3 } = require('../utils/awsSDK');

const isValid = (folder) => {
  fs.mkdirSync(folder, true);

  return folder;
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folder = helper.getNewfolder('my-uploads', 'local');
    cb(null, isValid(folder));
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

const aws = multer({
  storage: multerS3({
    s3,
    bucket: helper.getNewfolder('my-uploads', 'aws'),
    acl: 'private',
    metadata: (request, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (request, file, cb) => {
      cb(null, 'uploadedFile');
    },
  }),
});

const uploadHandlerLocal = multer({ storage });

const uploadHandlerAws = multer({ aws });

const uploadMiddleware = type => (req, res, next) => {
  let upload;
  try {
    switch (type) {
      case aws:
        upload = uploadHandlerAws;
        break;
      default:
        upload = uploadHandlerLocal;
        break;
    }
    return upload.single('file')(req, res, next);
  } catch (e) {
    return next(e);
  }
};

module.exports = uploadMiddleware;
