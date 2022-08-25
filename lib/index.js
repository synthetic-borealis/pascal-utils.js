const CompilerNotFoundError = require('./errors/compilerNotFoundError');
const CompilationFailedError = require('./errors/compilationFailedError');
const checkCompiler = require('./checkCompiler');
const compile = require('./compile');

module.exports = {
  CompilerNotFoundError,
  CompilationFailedError,
  checkCompiler,
  compile,
};
