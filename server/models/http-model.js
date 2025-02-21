class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // calls the message property in the parent Error class
    this.code = errorCode; // adds a new propety "code"
  }
}

module.exports = HttpError;
