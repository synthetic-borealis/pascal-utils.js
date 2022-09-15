import * as childProcess from 'child_process';
import CompilerNotFoundError from './errors/compilerNotFoundError';
import isVersionString from './utils/validation/isVersionString';

/**
 * Checks whether the Free Pascal compiler is present in the system path.
 * @param {string} compilerName - The name of the compiler executable.
 * @returns {Promise<{version: string}>}
 */
export default function checkCompiler(compilerName = 'fpc'): Promise<{ version: string }> {
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
