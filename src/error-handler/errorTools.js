const errorTypes = {
  400: 'validation',
  404: 'not_found',
  422: 'validation',
  500: 'internal_error',
  502: 'gateway_error',
};

const errorType = function getErrorType(errorCode) {
  return errorTypes[errorCode] || errorTypes[500];
};

const validationErrorFormatter = function getValidationErrorFormatter(param, msg, value) {
  return {
    type: errorType(400),
    field_name: param,
    message: `${msg}: ${value}`,
  };
};

const notFoundErrorFormatter = (exception = {}) => {
  const error = {
    type: 'not_found',
    message: exception.message,
  };

  return {
    status: 404,
    content: [error],
  };
};

const unsupportedMediaTypeFormatter = (exception = {}) => {
  const error = {
    type: 'not_found',
    message: exception.message,
  };

  return {
    status: 415,
    content: [error],
  };
};

module.exports = {
  errorType,
  validationErrorFormatter,
  notFoundErrorFormatter,
  unsupportedMediaTypeFormatter,
};
