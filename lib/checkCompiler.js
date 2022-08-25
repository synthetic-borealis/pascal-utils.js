const CompilerNotFoundError = require('./errors/compilerNotFoundError');
const isVersionString = require('./utils/validation/isVersionString');
const execute = require('./utils/execution/execute');

function checkCompiler() {
  return execute('fpc -iV')
    .then(({ stdout }) => {
      const version = stdout.trim();

      if (isVersionString(version)) {
        return Promise.resolve({ version });
      }
      return Promise.reject(new CompilerNotFoundError());
    })
    .catch(() => Promise.reject(new CompilerNotFoundError()));
}
module.exports = checkCompiler;
