module.exports = class NotFoundError extends Error {
  constructor(message, content, ...args) {
    super(message, ...args);
    this.content = content;
  }
};
