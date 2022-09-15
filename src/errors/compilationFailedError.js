class CompilationFailedError extends Error {
  /**
   * CompilationFailedError constructor.
   * @param {string} fileName - Source file that caused the error.
   */
  constructor(fileName) {
    super(`Failed to compile ${fileName}`);
  }
}
module.exports = CompilationFailedError;
