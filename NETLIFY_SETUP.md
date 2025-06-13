# Mythrill - Netlify Deployment Setup

## Quick Setup Guide

Your **Mythrill** TTRPG website is now ready for Netlify deployment! 🎉

### Step 1: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click **"New site from Git"**
3. Choose **GitHub** as your Git provider
4. Select your **WildEncounter** repository
5. Netlify will automatically detect the configuration from `netlify.toml`

### Step 2: Verify Build Settings

Netlify should automatically configure:
- **Build command**: `npm run build:netlify`
- **Publish directory**: `dist`
- **Branch to deploy**: `master`

### Step 3: Deploy!

Click **"Deploy site"** and Netlify will:
1. Install dependencies (`npm install`)
2. Build your site for Netlify (`npm run build:netlify`)
3. Deploy the `dist` folder
4. Provide you with a live URL

### Step 4: Custom Domain (Optional)

Once deployed, you can:
1. Change the site name from the random one to "mythrill" or your preferred name
2. Add a custom domain if you have one
3. Enable HTTPS (automatic with Netlify)

## What's Configured

✅ **Netlify Configuration** (`netlify.toml`)
- Automatic builds on push to master
- SPA routing for React Router
- Correct build command for Netlify

✅ **Build Optimization**
- Separate build commands for Netlify vs GitHub Pages
- Cross-platform environment variables
- Proper asset paths for Netlify

✅ **Site Branding**
- Updated to "Mythrill" throughout the site
- Clean, professional presentation

## Repository Information

- **Repository**: https://github.com/DJ-github88/WildEncounter.git
- **Branch**: master
- **Build Command**: `npm run build:netlify`
- **Publish Directory**: `dist`

## Troubleshooting

If you encounter any issues:
1. Check the deploy logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the build works locally with `npm run build:netlify`
4. Refer to `DEPLOYMENT.md` for detailed troubleshooting

## Local Development

To continue developing locally:
```bash
npm start        # Start development server
npm run preview  # Preview production build locally
```

Your site will work exactly like it does with `npm start` once deployed! 🚀
