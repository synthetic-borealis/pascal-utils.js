export default class CompilationFailedError extends Error {
  /**
   * CompilationFailedError constructor.
   * @param {string} fileName - Source file that caused the error.
   */
  constructor(fileName: string) {
    super(`Failed to compile ${fileName}`);
  }
}
