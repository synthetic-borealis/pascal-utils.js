export default class CompilationFailedError extends Error {
  /**
   * CompilationFailedError constructor.
   * @param {string} fileName - Source file in which the error occurred.
   */
  constructor(fileName: string) {
    super(`Failed to compile ${fileName}`);
  }
}
