# CLI Reference

The Strata UI CLI helps you quickly add components to your project.

## Installation

The CLI is available as an NPM package:

```bash
npm install -g @strata-ui/cli
```

Or just run it directly with `npx`:

```bash
npx @strata-ui/cli <command>
```

## Summary

| Command | Shorthand | Description |
| :--- | :--- | :--- |
| `init` | `strata init` | Initialize a new project |
| `add` | `strata add` | Add components to your project |
| `diff` | `strata diff` | Check for updates to components |

For convenience, we'll use the shorthand `strata` in examples below.

## Commands

### init

Initialize React Native UI in your project.

```bash
strata init
```

**Options:**

- `-y, --yes` - Skip confirmation prompts
- `-f, --force` - Overwrite existing configuration files

**What it does:**

1. Installs NativeWind and dependencies
2. Creates `tailwind.config.js`
3. Creates `components.json` config file
4. Sets up `lib/utils.ts`
5. Creates `components/ui` directory
6. Updates `babel.config.js`

**Example:**

```bash
# Interactive setup
strata init

# Skip prompts
strata init -y
```

```bash
strata init --force
```

### add

Add components to your project.

```bash
strata add [components...]
```

**Arguments:**

- `components` - One or more component names to add

**Options:**

- `-a, --all` - Add all available components
- `-o, --overwrite` - Overwrite existing components without prompting
- `-p, --path <path>` - Custom path for components (default: `./components/ui`)

**Examples:**

```bash
# Interactive selection
strata add

# Add specific components
strata add button card

# Add all components
strata add --all

# Overwrite existing
strata add button --overwrite

# Custom path
strata add button --path ./src/ui
```

**Available Components:**

- `button` - Button with variants
- `card` - Card container
- `text` - Typography
- `input` - Text input
- `badge` - Badge/label
- `avatar` - User avatar
- `separator` - Divider

### diff

Check for component updates.

```bash
strata diff [component]
```

**Arguments:**

- `component` - (Optional) Specific component to check

**Examples:**

```bash
# Check all components
strata diff

# Check specific component
strata diff button
```

**Output:**

Shows a diff between your local version and the latest version from the registry.

## Configuration

### components.json

The `components.json` file configures how components are added to your project:

```json
{
  "$schema": "https://strata-ui.dev/schema.json",
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
```

**Options:**

- `style` - Component style variant (`default`)
- `tailwind.config` - Path to Tailwind config
- `tailwind.css` - Path to global CSS
- `tailwind.baseColor` - Base color for components
- `tailwind.cssVariables` - Use CSS variables for theming
- `aliases.components` - Import alias for components
- `aliases.utils` - Import alias for utils

### Import Aliases

Components are added with import aliases defined in your config:

```tsx
// With default aliases
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// With custom aliases
// "aliases": { "components": "~/components", "utils": "~/lib" }
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
```

## Workflow

### Typical Workflow

1. **Initialize project:**
   ```bash
   strata init
   ```

2. **Add components as needed:**
   ```bash
   strata add button card
   ```

3. **Use components:**
   ```tsx
   import { Button } from '@/components/ui/button';
   ```

4. **Customize as needed:**
   Edit files in `components/ui/`

5. **Check for updates:**
   ```bash
   strata diff
   ```

### Updating Components

When updates are available:

```bash
# See what changed
strata diff button

# Update if desired
strata add button --overwrite
```

**Note:** You own the code, so updates are opt-in. Review changes before overwriting.

## Tips

1. **Review before adding** - Check the component source on GitHub before adding
2. **Customize freely** - Components are yours to modify
3. **Version control** - Commit components to track your changes
4. **Check updates** - Run `strata diff` periodically
5. **Customize** - Edit the source code in your `src/components/ui` folder

## Troubleshooting

### "Project not initialized"
Run `strata init` first to initialize the project. This creates your `components.json` configuration file.

### "Component not found"
Check available components with `strata add` (interactive mode) or see the [components list](./components/).

### Import errors

Verify your `tsconfig.json` has the correct path aliases matching `components.json`.

## Next Steps

- [Browse components](./components/)
- [Learn about theming](./theming.md)
- [See examples](./examples/)
