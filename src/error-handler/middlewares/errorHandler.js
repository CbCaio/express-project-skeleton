const { NotFoundError, UnsupportedMediaTypeError } = require('../type-errors/');
const errorTools = require('../errorTools');

const formatStringErrors = (errorList, errorCode) => errorList.map((error) => {
  if (typeof error === 'string') {
    return {
      type: errorTools.errorType(errorCode),
      message: error,
    };
  }

  return error;
});

const buildErrorByType = (err) => {
  let error;
  switch (err.constructor) {
    case NotFoundError:
      error = errorTools.notFoundErrorFormatter(err);
      break;
    case UnsupportedMediaTypeError:
      error = errorTools.notFoundErrorFormatter(err);
      break;
    default:
      error = err;
      break;
  }
  return error;
};

const buildErrorDict = (error) => {
  const err = buildErrorByType(error);

  const errorCode = err.status || 500;
  let errorList = Array.isArray(err.content) ? err.content : [err.content || err.message];
  errorList = formatStringErrors(errorList, errorCode);

  return {
    code: errorCode,
    errors: errorList,
  };
};

module.exports = () => (err, req, res, next) => {
  const errorDict = buildErrorDict(err);

  res.status(errorDict.code).json(errorDict);
  return next();
};
