class CompilerNotFoundError extends Error {
  constructor() {
    super('Could not find the Free Pascal compiler');
  }
}
module.exports = CompilerNotFoundError;
