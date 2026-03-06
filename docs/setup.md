# Project Setup Guide

Complete guide to setting up React Native UI for development and production.

## For Users (Quick Start)

If you just want to use React Native UI in your project:

```bash
npx @react-native-ui/cli init
npx @react-native-ui/cli add button card
```

See [Installation Guide](./installation.md) for details.

## For Contributors

Setting up the project for development.

### Prerequisites

- Node.js 18 or later
- npm 9 or later
- Git
- Code editor (VS Code recommended)
- Expo CLI (for running docs app)

### Initial Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/react-native-ui.git
   cd react-native-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the CLI**

   ```bash
   cd packages/cli
   npm run build
   cd ../..
   ```

4. **Link the CLI locally** (optional)

   ```bash
   cd packages/cli
   npm link
   cd ../..
   ```

   Now you can use `strata` command globally for testing.

### Development Workflow

#### Working on Components

1. **Edit component file**

   ```bash
   vi src/components/ui/button.tsx
   ```

2. **Test in docs app**

   ```bash
   npm run dev
   ```

   This starts the Expo docs app where you can see your changes.

3. **Update registry** (if needed)

   ```bash
   vi registry/components.json
   ```

#### Working on CLI

1. **Edit CLI code**

   ```bash
   vi packages/cli/src/commands/add.ts
   ```

2. **Rebuild**

   ```bash
   cd packages/cli
   npm run dev  # Watch mode
   ```

3. **Test in a sample project**

   ```bash
   # In another terminal
   cd /path/to/test-project
   rnui add button
   ```

### Project Structure

```
react-native-ui/
├── .github/
│   └── workflows/          # CI/CD pipelines
│       ├── ci.yml          # Tests and linting
│       └── publish.yml     # npm publishing
│
├── apps/
│   └── docs/               # Expo documentation app
│       ├── app/            # Expo Router pages
│       ├── components/     # Doc-specific components
│       └── package.json
│
├── packages/
│   └── cli/                # @react-native-ui/cli
│       ├── src/
│       │   ├── commands/   # CLI commands
│       │   └── utils/      # Utilities
│       ├── package.json
│       └── tsconfig.json
│
├── src/
│   ├── components/
│   │   ├── ui/            # Component source code
│   │   └── examples/      # Usage examples
│   ├── lib/               # Shared utilities
│   └── hooks/             # Shared hooks
│
├── registry/              # Component registry
│   ├── components.json    # Main registry
│   └── components/        # Individual metadata
│
├── docs/                  # Documentation
│   ├── installation.md
│   ├── cli.md
│   ├── theming.md
│   └── components/
│
├── package.json           # Workspace root
├── tsconfig.json          # TypeScript config
└── README.md
```

### Running Tests

Currently, the project uses the docs app for manual testing. Automated tests coming soon!

```bash
# Start docs app
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Building

```bash
# Build CLI
npm run build:cli

# Build everything
npm run build
```

## For Maintainers

Additional setup for project maintainers.

### NPM Access

1. **Get added to npm organization**

   Ask existing maintainer to run:
   ```bash
   npm owner add <your-username> @react-native-ui/cli
   ```

2. **Login to npm**

   ```bash
   npm login
   ```

### GitHub Permissions

You'll need:
- Write access to repository
- Access to create releases
- Access to manage GitHub Actions secrets

### Secrets Configuration

Add these to GitHub repository secrets:

1. `NPM_TOKEN` - npm automation token
   ```bash
   # Create token at npmjs.com
   # Settings → Access Tokens → Generate New Token
   # Type: Automation
   ```

2. `SENTRY_DSN` (optional) - Error tracking
   ```bash
   # Create at sentry.io
   ```

### Release Process

1. **Update version**

   ```bash
   cd packages/cli
   npm version minor  # or major/patch
   ```

2. **Update CHANGELOG**

   ```bash
   vi CHANGELOG.md
   ```

3. **Commit and tag**

   ```bash
   git add .
   git commit -m "chore: release v1.1.0"
   git tag v1.1.0
   git push origin main --tags
   ```

4. **GitHub Actions will**:
   - Run tests
   - Build package
   - Publish to npm
   - Create GitHub release

### Documentation Updates

Update docs for:
- New components
- API changes
- New features
- Breaking changes

Deploy automatically via Vercel/Netlify.

## Troubleshooting

### Issue: TypeScript errors

```bash
# Clear and rebuild
rm -rf node_modules package-lock.json
npm install
npm run typecheck
```

### Issue: CLI not found after `npm link`

```bash
# Rebuild and relink
cd packages/cli
npm run build
npm link
```

### Issue: Metro bundler cache

```bash
# In docs app
npx expo start -c
```

### Issue: Components not updating

```bash
# Restart Metro bundler
# Clear Expo cache
# Check file paths in registry
```

## IDE Setup

### VS Code

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

Settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Environment Variables

### Development

Create `.env.local` in project root:

```bash
# Optional
SENTRY_DSN=your-sentry-dsn
ANALYTICS_KEY=your-analytics-key
```

### Production

Set in GitHub Actions secrets and Vercel/Netlify.

## Database/Backend

React Native UI is static - no database needed!

Registry is just JSON files in the repository.

## Monitoring

### CLI Usage

Track via npm stats:
- https://npmjs.com/package/@react-native-ui/cli

### Documentation

Use Vercel/Netlify analytics:
- Page views
- Component page visits
- Search queries

## Next Steps

- Read [Contributing Guide](../CONTRIBUTING.md)
- Join [Discord](https://discord.gg/react-native-ui)
- Check [Open Issues](https://github.com/yourusername/react-native-ui/issues)
