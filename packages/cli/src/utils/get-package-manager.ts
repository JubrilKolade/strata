import * as fs from 'fs-extra';
import * as path from 'path';

export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export function getPackageManager(): PackageManager {
  const cwd = process.cwd();

  // Check for lock files
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) {
    return 'bun';
  }

  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }

  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) {
    return 'yarn';
  }

  // Default to npm
  return 'npm';
}
