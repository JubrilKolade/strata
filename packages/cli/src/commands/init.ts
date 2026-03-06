import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { execa } from 'execa';
import { DEPENDENCIES, DEV_DEPENDENCIES, DEFAULT_REGISTRY_URL } from '../utils/constants';

const COMPONENTS_JSON = (registryUrl: string) => `{
  "$schema": "https://strata-ui.dev/schema.json",
  "style": "default",
  "registry": "${registryUrl}",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "global.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
`;

const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(222.2 84% 4.9%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
        primary: {
          DEFAULT: "hsl(222.2 47.4% 11.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [],
};`;

const UTILS = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

const GLOBAL_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

export async function init() {
  const cwd = process.cwd();
  const spinner = ora('Initializing...').start();

  try {
    // Install dependencies
    await execa('npm', [
      'install',
      ...DEPENDENCIES,
    ], { cwd });

    await execa('npm', [
      'install',
      '--save-dev',
      ...DEV_DEPENDENCIES,
    ], { cwd });

    // Create components.json
    fs.writeFileSync(path.join(cwd, 'components.json'), COMPONENTS_JSON(DEFAULT_REGISTRY_URL));
    // Create files
    fs.writeFileSync(path.join(cwd, 'tailwind.config.js'), TAILWIND_CONFIG);
    fs.writeFileSync(path.join(cwd, 'global.css'), GLOBAL_CSS);

    fs.ensureDirSync(path.join(cwd, 'lib'));
    fs.writeFileSync(path.join(cwd, 'lib/utils.ts'), UTILS);

    fs.ensureDirSync(path.join(cwd, 'components/ui'));

    spinner.succeed('Initialized successfully!');

    console.log('\n' + chalk.cyan('Next steps:'));
    console.log('  1. Import global.css in your app');
    console.log('  2. Add components: npx rnui add button');
  } catch (error) {
    spinner.fail('Failed to initialize');
    console.error(error);
    process.exit(1);
  }
}
