const CompilerNotFoundError = require('./errors/compilerNotFoundError');
const isVersionString = require('./utils/validation/isVersionString');
const execute = require('./utils/execution/execute');

/**
 * Checks whether the Free Pascal compiler is present in the system path.
 * @param {string} compilerName - The name of the compiler executable.
 * @returns {Promise<{version: string}>}
 */
function checkCompiler(compilerName = 'fpc') {
  return execute(`${compilerName} -iV`)
    .then(({ stdout }) => {
      const versionString = stdout.trim();

      if (isVersionString(versionString)) {
        return Promise.resolve({ version: versionString });
      }
      return Promise.reject(new CompilerNotFoundError());
    })
    .catch(() => Promise.reject(new CompilerNotFoundError()));
}
module.exports = checkCompiler;
