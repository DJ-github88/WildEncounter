# Deployment Guide

This project is configured to deploy to both Netlify and GitHub Pages with different build configurations.

## Netlify Deployment

### Automatic Deployment (Recommended)

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account and select this repository
   - Netlify will automatically detect the `netlify.toml` configuration

2. **Configuration is automatic:**
   - Build command: `npm run build:netlify`
   - Publish directory: `dist`
   - Environment: `DEPLOY_TARGET=netlify`

### Manual Deployment

1. **Build for Netlify:**
   ```bash
   npm run build:netlify
   ```

2. **Deploy the `dist` folder:**
   - Drag and drop the `dist` folder to Netlify's deploy area
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## GitHub Pages Deployment

1. **Build for GitHub Pages:**
   ```bash
   npm run build:github
   ```

2. **Deploy to GitHub Pages:**
   - The build will be configured with `/WildEncounter/` base path
   - Deploy the `dist` folder contents to your `gh-pages` branch

## Key Differences

### Netlify Build
- Uses root-level paths (`/assets/...`)
- Includes SPA routing redirects
- No GitHub Pages script

### GitHub Pages Build
- Uses repository-specific paths (`/WildEncounter/assets/...`)
- Includes GitHub Pages SPA script
- Configured for subdirectory hosting

## Troubleshooting

### MIME Type Issues
If you see "Expected a JavaScript module script but the server responded with MIME type 'application/octet-stream'":

1. Make sure you're using the correct build command for your platform
2. Check that paths in `dist/index.html` are correct for your deployment target
3. For Netlify: paths should start with `/assets/...`
4. For GitHub Pages: paths should start with `/WildEncounter/assets/...`

### Build Commands
- `npm run build` - Default build (currently same as Netlify)
- `npm run build:netlify` - Build for Netlify deployment
- `npm run build:github` - Build for GitHub Pages deployment
- `npm run preview` - Preview the built site locally

## Files Modified for Deployment

- `vite.config.js` - Added conditional base path configuration
- `netlify.toml` - Netlify deployment configuration
- `package.json` - Added platform-specific build scripts
- Added `cross-env` dependency for cross-platform environment variables
