const fs = require('fs/promises');
const process = require('node:process');
const pascalUtils = require('../lib');

describe('Compiler detection', () => {
  it('Detects compiler', () => pascalUtils.checkCompiler()
    .then(() => {
      expect(true).toBeTruthy();
    }));
});

describe('Compilation', () => {
  const exeExtension = process.platform === 'win32' ? '.exe' : '';
  const sourceFile = './assets/hello.pas';
  const exeName = `./hello${exeExtension}`;
  it('Compiles and links', () => pascalUtils.compile(sourceFile, exeName)
    .then(() => {
      expect(true).toBeTruthy();
    }));
  afterAll(() => Promise.all([
    fs.unlink('./hello.o'),
    fs.unlink(exeName),
  ]));
});
