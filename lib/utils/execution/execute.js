const util = require('util');
const childProcess = require('child_process');

const execute = util.promisify(childProcess.exec);
module.exports = execute;
