# Getting Started - Strata UI

Welcome! This guide will help you get Strata UI up and running, whether you're a user or contributor.

## For Users: Add to Your Project

### Quick Start (2 minutes)

1. **Initialize Strata UI**

   ```bash
   npx @strata-ui/cli init
   ```

2. **Add your first component**

   ```bash
   npx @strata-ui/cli add button
   ```

3. **Use it**

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

That's it! See [full installation guide](./docs/installation.md) for more details.

## For Contributors: Development Setup

### Setup (5 minutes)

1. **Clone and install**

   ```bash
   git clone https://github.com/yourusername/strata-ui.git
   cd strata-ui
   npm install
   ```

2. **Build the CLI**

   ```bash
   cd packages/cli
   npm run build
   npm link  # Optional: use CLI globally
   cd ../..
   ```

3. **Start docs app**

   ```bash
   npm run dev
   ```

   This opens the Expo docs app where you can see all components.

### Making Changes

**Add a component:**

1. Create file in `src/components/ui/your-component.tsx`
2. Add to `registry/components.json`
3. Create examples in `src/components/examples/`
4. Add to docs app
5. Test thoroughly
6. Open pull request

See [Contributing Guide](./CONTRIBUTING.md) for detailed instructions.

## For Maintainers: Publishing

### Publishing CLI to NPM

```bash
cd packages/cli
npm version minor
npm run build
npm publish --access public
```

Or use GitHub Actions:

```bash
git tag v1.1.0
git push --tags
```

See [Deployment Guide](./docs/deployment.md) for full process.

## Project Structure

```
strata-ui/
├── packages/cli/          # @strata-ui/cli (npm package)
├── src/components/ui/     # Component source code
├── registry/              # Component metadata
├── docs/                  # Documentation
└── apps/docs/             # Expo demo app
```

## Key Files

- `README.md` - Project overview
- `CONTRIBUTING.md` - How to contribute
- `docs/installation.md` - User installation guide
- `docs/cli.md` - CLI documentation
- `docs/theming.md` - Theming guide
- `DEPLOYMENT_CHECKLIST.md` - Launch checklist

## Next Steps

**As a User:**
- [Installation Guide](./docs/installation.md)
- [CLI Reference](./docs/cli.md)
- [Browse Components](./src/components/ui/)
- [Theming](./docs/theming.md)

**As a Contributor:**
- [Contributing Guide](./CONTRIBUTING.md)
- [Setup Guide](./docs/setup.md)
- [GitHub Issues](https://github.com/yourusername/strata-ui/issues)
- [Discord Community](https://discord.gg/strata-ui)

**As a Maintainer:**
- [Deployment Guide](./docs/deployment.md)
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
- [Release Process](./docs/deployment.md#versioning-strategy)

## Get Help

- 💬 [Discord](https://discord.gg/strata-ui)
- 💡 [GitHub Discussions](https://github.com/yourusername/strata-ui/discussions)
- 🐛 [Issues](https://github.com/yourusername/strata-ui/issues)
- 📧 [Email](mailto:support@strata-ui.dev)

---

Happy coding! 🎉
