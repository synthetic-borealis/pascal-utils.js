const CompilerNotFoundError = require('./errors/compilerNotFoundError');
const isVersionString = require('./utils/validation/isVersionString');
const execute = require('./utils/execution/execute');

/**
 * Checks whether the Free Pascal compiler is present in the system path.
 * @returns {Promise<{version: string}>}
 */
function checkCompiler() {
  return execute('fpc -iV')
    .then(({ stdout }) => {
      /** @type{string} */
      const versionString = stdout.trim();

      if (isVersionString(versionString)) {
        return Promise.resolve({ version: versionString });
      }
      return Promise.reject(new CompilerNotFoundError());
    })
    .catch(() => Promise.reject(new CompilerNotFoundError()));
}
module.exports = checkCompiler;
