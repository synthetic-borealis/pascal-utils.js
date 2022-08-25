const pascalUtils = require('../lib');

describe('Compiler detection', () => {
  it('Detects compiler', () => pascalUtils.checkCompiler()
    .then(() => {
      expect(true).toBeTruthy();
    }));
});
