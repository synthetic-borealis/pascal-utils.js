const childProcess = require('child_process');
const CompilationFailedError = require('./errors/compilationFailedError');

/**
 * Compiles a Pascal source file.
 * @param {string} inputFile - Source file to compile.
 * @param {string} outputFile - Output file name (or path).
 * @returns {Promise<{file: string}>}
 */
function compile(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    childProcess.exec(`fpc "${inputFile}" -o"${outputFile}"`, (error) => {
      if (error) {
        reject(new CompilationFailedError(inputFile));
      }
      resolve({ file: inputFile });
    });
  });
}

module.exports = compile;
