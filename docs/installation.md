# Installation

Get started with Strata UI in your Expo project.

## Prerequisites

- Node.js 18 or later
- An Expo project (or create one with `npx create-expo-app`)
- Basic knowledge of React Native and Tailwind CSS

## Automatic Installation (Recommended)

The easiest way to get started is with our CLI tool:

\`\`\`bash
npx @react-native-ui/cli init
\`\`\`

This will:
- Install NativeWind v4 and dependencies
- Create `tailwind.config.js` with our default theme
- Setup `components.json` for configuration
- Create `lib/utils.ts` with helper functions
- Configure Babel for NativeWind
- Create a `components/ui` directory

## Manual Installation

If you prefer to set things up manually:

### 1. Install Dependencies

\`\`\`bash
npm install nativewind@^4.0.0
npm install --save-dev tailwindcss@^3.4.0 clsx tailwind-merge
\`\`\`

### 2. Create Tailwind Config

Create `tailwind.config.js`:

\`\`\`js
/** @type {import('tailwindcss').Config} */
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
}
\`\`\`

### 3. Configure Babel

Update `babel.config.js`:

\`\`\`js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
\`\`\`

### 4. Create Global CSS

Create `global.css`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

### 5. Import Global Styles

In your root layout (e.g., `app/_layout.tsx`):

\`\`\`tsx
import './global.css';
\`\`\`

### 6. Create Utils

Create `lib/utils.ts`:

\`\`\`ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`

### 7. Create Components Directory

\`\`\`bash
mkdir -p components/ui
\`\`\`

### 8. Create Components Config

Create `components.json`:

\`\`\`json
{
  "$schema": "https://react-native-ui.dev/schema.json",
  "style": "default",
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
\`\`\`

## TypeScript Configuration

Ensure your `tsconfig.json` includes path aliases:

\`\`\`json
{
  "compilerOptions": {
    "paths": {
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
\`\`\`

## Next Steps

You're all set! Now you can:

1. [Add your first component](./cli.md#add-components)
2. [Learn about theming](./theming.md)
3. [Browse available components](./components/)

## Troubleshooting

### Metro bundler cache issues

If styles aren't appearing:

\`\`\`bash
npx expo start -c
\`\`\`

### TypeScript path resolution

Make sure your `tsconfig.json` has the correct path aliases and restart your TypeScript server.

### NativeWind not working

1. Verify `global.css` is imported in your root layout
2. Check that `babel.config.js` includes the NativeWind preset
3. Clear Metro cache and restart

## Getting Help

- [Discord Community](https://discord.gg/react-native-ui)
- [GitHub Discussions](https://github.com/yourusername/react-native-ui/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native-ui)
