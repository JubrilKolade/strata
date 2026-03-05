# React Native UI

Beautiful, accessible components for React Native built with NativeWind. Copy, paste, and customize to build your apps faster.

![React Native UI](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![NativeWind](https://img.shields.io/badge/NativeWind-v4-purple)

## What is React Native UI?

React Native UI is a collection of beautifully designed, accessible React Native components built with NativeWind (Tailwind CSS for React Native). It's **not a component library** - it's a collection of re-usable components that you can copy and paste into your apps.

**Inspired by [shadcn/ui](https://ui.shadcn.com)**

### Why Copy-Paste?

- **You own the code** - Components live in your codebase
- **Fully customizable** - No need to override complex props
- **Zero lock-in** - Use what you need, modify as you want
- **Learn by reading** - See exactly how components work
- **No version conflicts** - Your dependencies, your rules

## Demo

Try the example app:

```bash
git clone https://github.com/yourusername/react-native-ui.git
cd react-native-ui/apps/docs
npm install
npm start
```

## Quick Start

### 1. Setup your Expo project

```bash
npx create-expo-app my-app
cd my-app
```

### 2. Initialize React Native UI

```bash
npx @react-native-ui/cli init
```

This will:
- Install NativeWind and dependencies  
- Create tailwind.config.js
- Setup utils and helpers
- Configure your project

### 3. Add components

```bash
npx @react-native-ui/cli add button
npx @react-native-ui/cli add card input
```

### 4. Use them in your app

```tsx
import { Button } from '@/components/ui/button';

export default function Screen() {
  return (
    <Button onPress={() => alert('Hello!')}>
      Click Me
    </Button>
  );
}
```

## Components

All components are built with:
- ✅ **Accessibility** - Proper ARIA attributes, screen reader support
- ✅ **TypeScript** - Fully typed with exported interfaces  
- ✅ **Variants** - Multiple styles out of the box
- ✅ **Customizable** - Easy to modify via className
- ✅ **NativeWind** - Tailwind CSS styling
- ✅ **Dark mode ready** - Theme system included

### Available Components

#### Layout
- [x] Card - Flexible card container with header, content, footer
- [x] Separator - Horizontal/vertical dividers
- [ ] Sheet - Bottom sheet and modal
- [ ] Tabs - Tabbed interface

#### Form
- [x] Button - Pressable with variants and states
- [x] Input - Text input with validation
- [ ] Checkbox - Checkboxes and switches
- [ ] Select - Dropdown selector
- [ ] Radio Group - Radio button group
- [ ] Switch - Toggle switch

#### Display  
- [x] Text - Typography with presets
- [x] Badge - Labels and tags
- [x] Avatar - User avatars
- [ ] Skeleton - Loading placeholders
- [ ] Progress - Progress indicators

#### Feedback
- [ ] Toast - Toast notifications
- [ ] Alert - Alert messages
- [ ] Dialog - Modal dialogs

## Documentation

- [Getting Started](./docs/getting-started.md)
- [Installation](./docs/installation.md)
- [CLI Usage](./docs/cli.md)
- [Theming](./docs/theming.md)
- [Components](./docs/components/)
- [Examples](./docs/examples/)

## Tech Stack

- [React Native](https://reactnative.dev/) - Mobile framework
- [Expo](https://expo.dev/) - Development platform  
- [NativeWind v4](https://www.nativewind.dev/) - Tailwind for React Native
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing

## Community

- [Discord](https://discord.gg/react-native-ui) - Join our community
- [Twitter](https://twitter.com/reactnativeui) - Follow for updates
- [GitHub Discussions](https://github.com/yourusername/react-native-ui/discussions) - Ask questions

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md).

### Development Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/strata-ui.git
cd strata-ui

# Install dependencies
npm install

# Start the docs app
npm run dev

# Build the CLI
cd packages/cli
npm run build
```

## Roadmap

### v1.0 (Current)
- [x] Core components (Button, Card, Input, etc.)
- [x] CLI tool
- [x] Documentation app
- [x] TypeScript support

### v1.1
- [ ] Form components (Checkbox, Radio, Select)
- [ ] Bottom Sheet
- [ ] Toast notifications
- [ ] Dark mode

### v1.2  
- [ ] Animation support (Reanimated)
- [ ] More complex components
- [ ] Component playground
- [ ] Figma kit

### v2.0
- [ ] Form validation library
- [ ] Advanced animations
- [ ] Premium templates
- [ ] VS Code extension

## Inspiration

This project is heavily inspired by:
- [shadcn/ui](https://ui.shadcn.com) - For the copy-paste philosophy
- [Radix UI](https://www.radix-ui.com/) - For accessibility patterns
- [Tailwind CSS](https://tailwindcss.com) - For the styling approach

## License

MIT © [Your Name](https://github.com/yourusername)

---

Built with ❤️ for the React Native community
