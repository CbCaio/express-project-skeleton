const { errorHandlerMiddleware } = require('./middlewares');
const HttpError = require('./type-errors/HttpError');
const NotFoundError = require('./type-errors/NotFoundError');
const UnsupportedMediaTypeError = require('./type-errors/UnsupportedMediaTypeError');

module.exports = () => {
  const errorHandler = errorHandlerMiddleware();

  return {
    errorHandlerMiddleware: errorHandler,
    HttpError,
    NotFoundError,
    UnsupportedMediaTypeError,
  };
};
