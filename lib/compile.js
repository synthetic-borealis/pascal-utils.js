const CompilationFailedError = require('./errors/compilationFailedError');
const execute = require('./utils/execution/execute');

/**
 * Compiles a Pascal source file.
 * @param {string} inputFile - Source file to compile.
 * @param {string} outputFile - Output file name (or path).
 * @returns {Promise<{file: string}>}
 */
function compile(inputFile, outputFile) {
  return execute(`fpc "${inputFile}" -o"${outputFile}"`)
    .then(() => Promise.resolve({ file: inputFile }))
    .catch(() => Promise.reject(new CompilationFailedError(inputFile)));
}
module.exports = compile;
