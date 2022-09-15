const fs = require('fs/promises');
const process = require('node:process');
const {
  CompilerNotFoundError,
  CompilationFailedError,
  checkCompiler,
  compile,
} = require('../src');

describe('Compiler detection', () => {
  const mockFpc = 'node ./assets/mockFpc.js';
  it('Detects compiler', () => checkCompiler()
    .then(() => {
      expect(true).toBeTruthy();
    }));
  it('Throws CompilerNotFoundError when specified compiler is not found', async () => {
    await expect(checkCompiler('lol')).rejects.toBeInstanceOf(CompilerNotFoundError);
  });
  it('Throws CompilerNotFoundError when specified compiler is not Free Pascal', async () => {
    await expect(checkCompiler(mockFpc)).rejects.toBeInstanceOf(CompilerNotFoundError);
  });
});

describe('Compilation', () => {
  const exeExtension = process.platform === 'win32' ? '.exe' : '';
  const helloSourceFile = './assets/hello.pas';
  const helloExeName = `./hello${exeExtension}`;
  const badSourceFile = './assets/goodbye.pas';
  const badExeName = `./goodbye${exeExtension}`;
  it('Compiles and links', () => compile(helloSourceFile, helloExeName)
    .then(() => {
      expect(true).toBeTruthy();
    }));
  it('Throws CompilationFailedError when compilation fails', async () => {
    await expect(compile(badSourceFile, badExeName)).rejects.toBeInstanceOf(CompilationFailedError);
  });
  afterAll(() => Promise.all([
    fs.unlink('./hello.o'),
    fs.unlink(helloExeName),
  ]));
});
