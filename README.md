# Strata UI

Beautiful, accessible components for **React Native** built with **NativeWind**. Copy, paste, and customize to build your apps faster.

![Strata UI](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![NativeWind](https://img.shields.io/badge/NativeWind-v4-purple?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-black?style=for-the-badge)

## What is Strata UI?

Strata UI is a collection of beautifully designed, accessible React Native components built with NativeWind (Tailwind CSS for React Native). It's **not a component library** - it's a collection of re-usable components that you can copy and paste into your apps, giving you full control over the code.

**Inspired by [shadcn/ui](https://ui.shadcn.com)**

### Why Strata UI?

- **Full Control** - Components live in your codebase, not in `node_modules`.
- **Customizable** - Modify any component to fit your exact design needs.
- **Accessible** - Built with accessibility best practices in mind.
- **Modern Stack** - Powered by NativeWind v4 and TypeScript.
- **Performance** - Zero overhead, only use what you need.

## Quick Start

### 1. Initialize Strata UI

```bash
npx @strata-ui/cli init
```

This will set up your project with NativeWind v4, colors, and core utilities.

### 2. Add components

```bash
npx @strata-ui/cli add button
npx @strata-ui/cli add card avatar
```

### 3. Use them in your app

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function App() {
  return (
    <Button onPress={() => console.log('Pressed')}>
      <Text>Get Started</Text>
    </Button>
  );
}
```

## UI Components

We provide a growing set of components that follow a consistent design system.

### Form
- [x] **Button** - Highly customizable pressable with variants
- [x] **Input** - Styled text input with focus states
- [x] **Checkbox** - Standard checkbox input
- [x] **Select** - Dropdown selector for options
- [x] **Slider** - Range selection slider
- [x] **Switch** - Toggle switch component
- [x] **Textarea** - Multi-line text input
- [x] **Label** - Accessible label for form fields

### Layout & Display
- [x] **Card** - Flexible container for content
- [x] **Accordion** - Collapsible content sections
- [x] **Tabs** - Navigational tab system
- [x] **Avatar** - Profile images and initials
- [x] **Badge** - Visual labels and status tags
- [x] **Separator** - Minimal dividers
- [x] **Skeleton** - Loading placeholders
- [x] **Text** - Core typography system

### Overlay & Feedback
- [x] **Dialog** - Modal overlay component
- [x] **AlertDialog** - Confirmation and alert modals
- [x] **Toast** - Floating notifications
- [x] **Progress** - Progress tracking indicators
- [x] **ContextMenu** - Contextual menus

## Tech Stack

- **React Native** - Foundation for cross-platform apps
- **NativeWind v4** - Styling with Tailwind CSS
- **TypeScript** - First-class type descriptions
- **Zustand** - For state-heavy components (Toast)
- **Lucide Icons** - Modern, consistent iconography

## Community & Contributing

We welcome all contributions! Whether it's a bug report, a feature request, or a new component.

- [GitHub Repository](https://github.com/JubrilKolade/strata)
- [Issue Tracker](https://github.com/JubrilKolade/strata/issues)
- [Contributing Guide](./CONTRIBUTING.md)

## Credits

- [shadcn/ui](https://ui.shadcn.com) - For the amazing architecture patterns.
- [NativeWind](https://www.nativewind.dev/) - For making Tailwind available on React Native.

## License

Licensed under the [MIT License](./LICENSE).

Built with ❤️ by [Jubril Kolade](https://github.com/JubrilKolade)
