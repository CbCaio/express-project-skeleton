module.exports = class UnsupportedMediaTypeError extends Error {
  constructor(message, content, ...args) {
    super(message, ...args);
    this.content = content;
  }
};
