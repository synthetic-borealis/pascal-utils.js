import childProcess, { ExecException } from 'child_process';
import CompilationFailedError from './errors/compilationFailedError';

/**
 * Compiles a Pascal source file.
 * @category Compilation
 * @param {string} inputFile - Source file to compile.
 * @param {string} outputFile - Output file name (or path).
 * @returns {Promise<{file: string}>}
 * @throws {@link CompilationFailedError} if compilation fails.
 */
export default function compile(inputFile: string, outputFile: string): Promise<{ file: string }> {
  return new Promise((resolve, reject) => {
    childProcess.exec(`fpc "${inputFile}" -o"${outputFile}"`, (error: ExecException | null) => {
      if (error) {
        reject(new CompilationFailedError(inputFile));
      }
      resolve({ file: inputFile });
    });
  });
}
