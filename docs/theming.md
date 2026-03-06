# Theming

Customize Strata UI components to match your brand.

## Color System

React Native UI uses a semantic color system built on HSL values. This makes it easy to create consistent, accessible color palettes.

### Default Theme

The default theme includes:

```js
colors: {
  background: "hsl(0 0% 100%)",        // White
  foreground: "hsl(222.2 84% 4.9%)",    // Near black
  primary: {
    DEFAULT: "hsl(222.2 47.4% 11.2%)",  // Dark blue
    foreground: "hsl(210 40% 98%)",      // Light
  },
  secondary: {
    DEFAULT: "hsl(210 40% 96.1%)",       // Light gray
    foreground: "hsl(222.2 47.4% 11.2%)", // Dark
  },
  destructive: {
    DEFAULT: "hsl(0 84.2% 60.2%)",       // Red
    foreground: "hsl(210 40% 98%)",      // Light
  },
  muted: {
    DEFAULT: "hsl(210 40% 96.1%)",       // Light gray
    foreground: "hsl(215.4 16.3% 46.9%)", // Medium gray
  },
  accent: {
    DEFAULT: "hsl(210 40% 96.1%)",       // Light gray
    foreground: "hsl(222.2 47.4% 11.2%)", // Dark
  },
  card: {
    DEFAULT: "hsl(0 0% 100%)",           // White
    foreground: "hsl(222.2 84% 4.9%)",   // Dark
  },
  border: "hsl(214.3 31.8% 91.4%)",      // Light gray
  input: "hsl(214.3 31.8% 91.4%)",       // Light gray
  ring: "hsl(222.2 84% 4.9%)",           // Dark
}
```

## Customizing Colors

### Method 1: Update tailwind.config.js

Edit your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Change primary to purple
        primary: {
          DEFAULT: "hsl(262.1 83.3% 57.8%)",
          foreground: "hsl(210 40% 98%)",
        },
        // Change destructive to orange
        destructive: {
          DEFAULT: "hsl(24.6 95% 53.1%)",
          foreground: "hsl(60 9.1% 97.8%)",
        },
      },
    },
  },
}
```

### Method 2: Create Theme Presets

Create multiple theme files:

```js
// themes/purple.js
module.exports = {
  primary: {
    DEFAULT: "hsl(262.1 83.3% 57.8%)",
    foreground: "hsl(210 40% 98%)",
  },
  // ... other colors
}

// tailwind.config.js
const purple = require('./themes/purple');

module.exports = {
  theme: {
    extend: {
      colors: purple,
    },
  },
}
```

## Dark Mode

### Setup

1. Add dark mode support to Tailwind:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        background: "hsl(222.2 84% 4.9%)", // Dark background
        foreground: "hsl(210 40% 98%)",     // Light text
        // ... update all colors for dark mode
      },
    },
  },
}
```

2. Use color variables:

```js
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
}
```

3. Define CSS variables in `global.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### Toggle Dark Mode

```tsx
import { useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  
  return (
    <View className={colorScheme === 'dark' ? 'dark' : ''}>
      {/* Your app */}
    </View>
  );
}
```

## Typography

### Font Families

Add custom fonts:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
}
```

Use in components:

```tsx
<Text className="font-sans">Regular text</Text>
<Text className="font-mono">Code text</Text>
```

### Font Sizes

Customize sizes:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'xs': '11px',
        'sm': '13px',
        'base': '15px',
        'lg': '17px',
        'xl': '19px',
        '2xl': '23px',
        '3xl': '29px',
      },
    },
  },
}
```

## Spacing

### Border Radius

Adjust corner roundness:

```js
// tailwind.config.js
module.exports: {
  theme: {
    extend: {
      borderRadius: {
        lg: "16px",  // More rounded
        md: "12px",
        sm: "8px",
      },
    },
  },
}
```

### Padding & Margin

Use Tailwind's default spacing or customize:

```js
theme: {
  extend: {
    spacing: {
      '18': '72px',
      '88': '352px',
    },
  },
}
```

## Component-Specific Theming

### Override Component Styles

Since you own the code, directly edit components:

```tsx
// components/ui/button.tsx
const Button = ({ className, ...props }) => {
  return (
    <Pressable
      className={cn(
        "rounded-full", // Changed from rounded-md
        "px-8",         // More padding
        className
      )}
      {...props}
    />
  );
}
```

### Create Variants

Add new variants to components:

```tsx
const variantStyles = {
  default: "bg-primary",
  outline: "border-2 border-primary",
  gradient: "bg-gradient-to-r from-purple-500 to-pink-500", // New!
};
```

## Platform-Specific Theming

Use Platform module for iOS/Android differences:

```tsx
import { Platform } from 'react-native';

const Button = ({ className }) => {
  const platformStyles = Platform.select({
    ios: "shadow-sm",
    android: "elevation-2",
  });
  
  return (
    <Pressable className={cn("base-styles", platformStyles, className)} />
  );
}
```

## Animation

Add animation classes (requires additional setup):

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
}
```

## Best Practices

### 1. Use Semantic Colors

```tsx
// ✅ Good - Semantic
<Button className="bg-primary" />

// ❌ Bad - Specific
<Button className="bg-blue-500" />
```

### 2. Maintain Contrast

Ensure text is readable:

```js
primary: {
  DEFAULT: "hsl(262.1 83.3% 57.8%)",
  foreground: "hsl(210 40% 98%)", // High contrast
}
```

### 3. Test Both Themes

If supporting dark mode, test all components in both themes.

### 4. Document Custom Colors

```js
// Add comments
colors: {
  // Brand colors
  primary: "hsl(262.1 83.3% 57.8%)", // Purple
  
  // Functional colors
  success: "hsl(142 76% 36%)",       // Green
  warning: "hsl(38 92% 50%)",        // Orange
}
```

## Examples

### Branded Theme

```js
// Brand: Acme Corp (Blue & Orange)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(217 91% 60%)",      // Acme Blue
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(27 96% 61%)",       // Acme Orange
          foreground: "hsl(0 0% 0%)",
        },
      },
    },
  },
}
```

### Minimalist Theme

```js
// Minimal black & white
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 0%)",
        primary: {
          DEFAULT: "hsl(0 0% 0%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 96%)",
          foreground: "hsl(0 0% 46%)",
        },
      },
      borderRadius: {
        lg: "0px",  // No rounding
        md: "0px",
        sm: "0px",
      },
    },
  },
}
```

## Resources

- [Tailwind Color Generator](https://uicolors.app)
- [HSL Color Picker](https://hslpicker.com)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [shadcn/ui Themes](https://ui.shadcn.com/themes) (for inspiration)

## Next Steps

- [Browse components](./components/)
- [View examples](./examples/)
- [Read CLI docs](./cli.md)
