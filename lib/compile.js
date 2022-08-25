const CompilationFailedError = require('./errors/compilationFailedError');
const execute = require('./utils/execution/execute');

function compile(inputFile, outputFile) {
  return execute(`fpc "${inputFile}" -o"${outputFile}"`)
    .then(() => Promise.resolve({ file: inputFile }))
    .catch(() => Promise.reject(new CompilationFailedError(inputFile)));
}
module.exports = compile;
