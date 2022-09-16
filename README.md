# Pascal Utils

![GitHub](https://img.shields.io/github/license/synthetic-borealis/pascal-utils.js)
[![npm version](https://badge.fury.io/js/pascal-utils.svg)](https://badge.fury.io/js/pascal-utils)
![Unit Tests](https://github.com/synthetic-borealis/pascal-utils.js/actions/workflows/test.yml/badge.svg)
[![codecov](https://codecov.io/gh/synthetic-borealis/pascal-utils.js/branch/main/graph/badge.svg?token=SXLIC3FL1Q)](https://codecov.io/gh/synthetic-borealis/pascal-utils.js)

Utility functions for compilation of simple pascal programs with the Free Pascal compiler in
Node.js.

## Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
   1. [Compiler Detection](#compiler-detection)
   2. [Compilation](#compilation)
4. [Examples](#examples) 

## Requirements

* The Free Pascal compiler.
* Node.js v16.x or above.

## Installation

Run `yarn add pascal-utils -D` or `npm i pascal-utils --save-dev`.

## Usage

The documentation can be found [here](./docs/API.md).

### Compiler Detection

Run `checkCompiler().then(({ version }) => ...)` to check if the Free Pascal compiler is installed
and is in the system path.

### Compilation

Run `compile(inputFile, outputFile).then(...)` to compile a program.

## Examples

```javascript
const fs = require('fs/promises');
const pascalUtils = require('pascal-utils');

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
```
