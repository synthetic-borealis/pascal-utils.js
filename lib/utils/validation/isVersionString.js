function isVersionString(version) {
  const versionStringRegex = /^\d+\.\d+\.\d+$/;

  return versionStringRegex.test(version);
}

module.exports = isVersionString;
