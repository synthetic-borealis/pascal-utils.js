export default class CompilerNotFoundError extends Error {
  /**
   * CompilerNotFoundError constructor.
   */
  constructor() {
    super('Could not find the Free Pascal compiler');
  }
}
