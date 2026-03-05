# Deployment Guide

How to deploy and publish React Native UI.

## Publishing the CLI to NPM

### Prerequisites

- npm account (https://www.npmjs.com/)
- Maintainer access to @react-native-ui org
- npm authentication token

### Manual Publishing

1. **Update version**

   ```bash
   cd packages/cli
   npm version patch # or minor, or major
   ```

2. **Build**

   ```bash
   npm run build
   ```

3. **Test locally**

   ```bash
   npm link
   
   # In a test project
   rnui init
   ```

4. **Publish**

   ```bash
   npm publish --access public
   ```

### Automated Publishing (GitHub Actions)

Publishing is automated via GitHub Actions when you push a tag:

1. **Update version**

   ```bash
   cd packages/cli
   npm version patch
   git add package.json
   git commit -m "chore: bump version to x.x.x"
   ```

2. **Create and push tag**

   ```bash
   git tag v1.0.1
   git push origin main --tags
   ```

3. **GitHub Actions will**:
   - Build the CLI
   - Run tests
   - Publish to npm
   - Create GitHub release

## Hosting the Registry

The component registry needs to be publicly accessible.

### Option 1: GitHub (Recommended)

Use GitHub raw URLs:

```
https://raw.githubusercontent.com/yourusername/react-native-ui/main/registry/components.json
https://raw.githubusercontent.com/yourusername/react-native-ui/main/src/components/ui/button.tsx
```

**Pros:**
- Free
- Version control
- Easy updates
- No setup needed

**Cons:**
- Subject to GitHub rate limits
- Requires public repository

### Option 2: CDN (jsDelivr)

Use jsDelivr for better caching:

```
https://cdn.jsdelivr.net/gh/yourusername/react-native-ui@main/registry/components.json
```

**Pros:**
- Free CDN
- Better performance
- Caching

**Cons:**
- Cache invalidation delay

### Option 3: Custom Server

Host on your own infrastructure:

```js
// Express server example
app.get('/registry/components.json', (req, res) => {
  res.json(registry);
});

app.get('/components/:name', (req, res) => {
  const component = fs.readFileSync(`./components/${req.params.name}.tsx`);
  res.send(component);
});
```

**Pros:**
- Full control
- Custom analytics
- No rate limits

**Cons:**
- Maintenance required
- Hosting costs

## Documentation Website

### Option 1: GitHub Pages

Deploy docs to GitHub Pages:

1. **Build static site** (if using Next.js, Docusaurus, etc.)

   ```bash
   npm run build
   ```

2. **Deploy**

   ```bash
   npm run deploy
   ```

### Option 2: Vercel

Deploy to Vercel for free:

1. **Connect repository** on vercel.com

2. **Configure build**:
   ```
   Framework: Next.js (or your framework)
   Build command: npm run build
   Output directory: out
   ```

3. **Deploy**:
   - Automatic on git push
   - Preview deployments for PRs

### Option 3: Netlify

Similar to Vercel:

1. Connect repository
2. Configure build settings
3. Deploy

## Component Updates

When you update components:

### 1. Update Component Files

```bash
# Edit component
vi src/components/ui/button.tsx

# Commit changes
git commit -m "fix: improve button accessibility"
git push
```

### 2. Update Registry

If you added/removed props, update registry:

```json
// registry/components.json
{
  "components": {
    "button": {
      "version": "1.0.1",  // Bump version
      // ...
    }
  }
}
```

### 3. Notify Users

Users can check for updates:

```bash
npx @react-native-ui/cli diff
```

## Versioning Strategy

### CLI Package

Follow semver:
- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features
- **Patch** (1.0.0 → 1.0.1): Bug fixes

### Components

Components are versioned individually in registry:

```json
{
  "button": {
    "version": "1.2.0",
    "files": [...]
  }
}
```

## Changelog

Maintain a CHANGELOG.md:

```markdown
# Changelog

## [1.1.0] - 2024-02-01

### Added
- Switch component
- Dark mode support

### Changed
- Improved Button accessibility

### Fixed
- Input placeholder color

## [1.0.0] - 2024-01-15

- Initial release
```

## Release Checklist

Before releasing:

- [ ] All tests passing
- [ ] Version bumped
- [ ] CHANGELOG.md updated
- [ ] Documentation updated
- [ ] Examples tested
- [ ] Breaking changes documented
- [ ] Migration guide (if needed)

## Monitoring

### Analytics (Optional)

Track component usage:

```js
// In CLI add command
const analytics = require('./analytics');

analytics.track('component_added', {
  component: componentName,
  version: componentVersion,
});
```

### Error Tracking

Use Sentry or similar:

```js
// packages/cli/src/index.ts
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});
```

## Backup & Recovery

### Registry Backup

Keep registry in git - it's your source of truth.

### NPM Package Recovery

If you need to unpublish (not recommended):

```bash
npm unpublish @react-native-ui/cli@1.0.0
```

Better: publish a new patch version with the fix.

## Security

### Dependency Updates

Keep dependencies updated:

```bash
npm audit
npm audit fix
```

### Access Control

Limit npm publishing to trusted maintainers:

```bash
npm owner add <username> @react-native-ui/cli
```

## Support

### Community Support Channels

- GitHub Discussions
- Discord server  
- Stack Overflow tag

### Issue Management

- Use issue templates
- Label issues (bug, feature, question)
- Automate with GitHub Actions
- Close stale issues

## Next Steps

- Setup GitHub Actions
- Configure npm publishing
- Deploy documentation site
- Create issue templates
- Setup Discord/community
