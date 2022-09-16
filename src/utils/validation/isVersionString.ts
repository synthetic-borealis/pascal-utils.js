export default function isVersionString(version: string): boolean {
  const versionStringRegex = /^\d+\.\d+\.\d+$/;

  return versionStringRegex.test(version);
}
