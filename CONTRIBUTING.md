# Contributing to Strata UI

Thank you for your interest in contributing to Strata UI! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for everyone.

## Getting Started

### Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   git clone https://github.com/YOUR_USERNAME/strata-ui.git
   cd strata-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the docs app**
   ```bash
   npm run dev
   ```

4. **Build the CLI**
   ```bash
   npm run build:cli
   ```

## Project Structure

```
strata-ui/
├── apps/
│   └── docs/              # Expo documentation app
├── packages/
│   └── cli/               # CLI package (@strata-ui/cli)
├── src/
│   ├── components/
│   │   ├── ui/           # Component implementations
│   │   └── examples/     # Usage examples
│   ├── lib/              # Shared utilities
│   └── hooks/            # Shared hooks
├── registry/             # Component registry
│   ├── components.json   # Registry index
│   └── components/       # Individual component metadata
└── docs/                 # Documentation
```

## Ways to Contribute

### 1. Report Bugs

Found a bug? Please open an issue with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, Expo SDK version)
- Screenshots if applicable

### 2. Suggest Features

Have an idea? Open a discussion or issue with:
- Use case description
- Proposed API/implementation
- Examples from other libraries (if applicable)

### 3. Add Components

Want to add a new component? Great!

#### Before You Start

1. Check if someone else is working on it (search issues/PRs)
2. Open an issue to discuss the component
3. Get feedback on the API design

#### Component Guidelines

**Accessibility**
- Use proper accessibility props
- Support screen readers
- Include proper labels and hints

**TypeScript**
- Full TypeScript support
- Export all types and interfaces
- Use generics appropriately

**Styling**
- Use NativeWind classes exclusively
- Follow the existing color system
- Support customization via `className`

**Documentation**
- Add JSDoc comments
- Create usage examples
- Document all props

**Example Component**

```tsx
import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface MyComponentProps extends PressableProps {
  /**
   * Visual variant of the component
   * @default "default"
   */
  variant?: 'default' | 'custom';
  
  /**
   * Size of the component
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * MyComponent - Description of what it does
 * 
 * @example
 * ```tsx
 * <MyComponent variant="custom" size="lg">
 *   Hello World
 * </MyComponent>
 * ```
 */
const MyComponent = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  MyComponentProps
>(({ 
  className, 
  variant = 'default', 
  size = 'md',
  ...props 
}, ref) => {
  return (
    <Pressable
      ref={ref}
      className={cn(
        "rounded-md",
        variant === 'custom' && "bg-primary",
        size === 'sm' && "p-2",
        className
      )}
      accessibilityRole="button"
      {...props}
    />
  );
});

MyComponent.displayName = 'MyComponent';

export { MyComponent };
```

#### Component Checklist

- [ ] Component file in `src/components/ui/`
- [ ] TypeScript types exported
- [ ] Accessibility props included
- [ ] Usage examples in `src/components/examples/`
- [ ] Registry entry in `registry/components.json`
- [ ] Individual registry file in `registry/components/`
- [ ] Documentation in `docs/components/`
- [ ] Added to docs app showcase

### 4. Improve Documentation

Documentation improvements are always welcome!

- Fix typos
- Clarify unclear sections
- Add more examples
- Improve code samples

### 5. Fix Bugs

Bug fixes are highly appreciated!

- Write a test that reproduces the bug (if applicable)
- Fix the bug
- Verify the fix works
- Update documentation if needed

## Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/my-new-component
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments where needed
- Update tests if applicable

### 3. Commit Your Changes

Use conventional commits:

```bash
git commit -m "feat: add Switch component"
git commit -m "fix: button loading state"
git commit -m "docs: improve installation guide"
```

**Commit Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

### 4. Test Your Changes

```bash
# Test in docs app
npm run dev

# Type check
npm run typecheck

# Build CLI
npm run build:cli
```

### 5. Push and Create PR

```bash
git push origin feature/my-new-component
```

Then create a pull request on GitHub with:
- Clear description of changes
- Screenshots/videos for UI changes
- Link to related issue
- Testing steps

### 6. Review Process

- Maintainers will review your PR
- Address any feedback
- Once approved, it will be merged!

## Code Style

### TypeScript

```tsx
// ✅ Good
export interface ButtonProps extends PressableProps {
  variant?: 'default' | 'outline';
}

// ❌ Bad
export interface ButtonProps {
  variant: string;
  onPress: any;
}
```

### Component Naming

```tsx
// ✅ Good
const Button = React.forwardRef<...>(...);
Button.displayName = 'Button';

// ❌ Bad
function button() { ... }
```

### Imports

```tsx
// ✅ Good - Group and order imports
import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../lib/utils';

// ❌ Bad - Mixed order
import { cn } from '../../lib/utils';
import React from 'react';
```

### Props

```tsx
// ✅ Good - Destructure and use defaults
const Component = ({ 
  variant = 'default',
  className,
  ...props 
}) => { ... }

// ❌ Bad - Access via props object
const Component = (props) => {
  return <View className={props.className} />
}
```

## Adding to Registry

When adding a component, update `registry/components.json`:

```json
{
  "components": {
    "my-component": {
      "name": "MyComponent",
      "description": "Brief description",
      "files": [
        {
          "path": "src/components/ui/my-component.tsx",
          "type": "component"
        }
      ],
      "dependencies": ["react-native"],
      "devDependencies": ["clsx", "tailwind-merge"],
      "registryDependencies": [],
      "category": "form",
      "tags": ["input", "form"]
    }
  }
}
```

## Publishing (Maintainers Only)

### CLI Package

1. Update version in `packages/cli/package.json`
2. Build: `npm run build:cli`
3. Test locally: `npm link` then test in a project
4. Commit and push
5. Create tag: `git tag v1.x.x && git push --tags`
6. GitHub Actions will publish to npm

## Questions?

- Open a [Discussion](https://github.com/yourusername/strata-ui/discussions)
- Join our [Discord](https://discord.gg/strata-ui)
- Check existing [Issues](https://github.com/yourusername/strata-ui/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Strata UI! 🎉
