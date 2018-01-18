
module.exports = class HttpError extends Error {
  constructor(status, message, content, ...args) {
    super(message, ...args);

    this.status = status;
    this.content = content;
  }
};
