const childProcess = require('child_process');
const CompilerNotFoundError = require('./errors/compilerNotFoundError');
const isVersionString = require('./utils/validation/isVersionString');

/**
 * Checks whether the Free Pascal compiler is present in the system path.
 * @param {string} compilerName - The name of the compiler executable.
 * @returns {Promise<{version: string}>}
 */
function checkCompiler(compilerName = 'fpc') {
  return new Promise((resolve, reject) => {
    childProcess.exec(`${compilerName} -iV`, (error, stdout) => {
      if (error) {
        reject(new CompilerNotFoundError());
      }
      const version = stdout.trim();
      if (isVersionString(version)) {
        resolve({ version });
      }
      reject(new CompilerNotFoundError());
    });
  });
}

module.exports = checkCompiler;
