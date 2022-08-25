class CompilationFailedError extends Error {
  constructor(fileName) {
    super(`Failed to compile ${fileName}`);
  }
}
module.exports = CompilationFailedError;
