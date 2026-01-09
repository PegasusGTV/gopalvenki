# 🚀 Deployment Setup Guide

## ✅ What's Been Done

1. ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
2. ✅ Next.js configured for static export
3. ✅ All code pushed to GitHub

## 🔧 Required: Enable GitHub Pages

To make your website live, you need to enable GitHub Pages in your repository settings:

### Step 1: Go to Repository Settings
1. Visit: https://github.com/PegasusGTV/gopalvenki
2. Click on the **"Settings"** tab (top of repository)

### Step 2: Enable GitHub Pages
1. Scroll down to **"Pages"** in the left sidebar
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **"Save"**

### Step 3: Verify Workflow Permissions
1. In Settings, go to **"Actions"** → **"General"**
2. Scroll to **"Workflow permissions"**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

### Step 4: Check Deployment
1. Go to the **"Actions"** tab in your repository
2. You should see **"Deploy Portfolio to GitHub Pages"** workflow running
3. Wait for it to complete (usually 3-5 minutes)
4. Once complete, you'll see a green checkmark ✅

## 🌐 Your Website URL

Once deployed, your portfolio will be available at:
**https://pegasusgtv.github.io/gopalvenki/**

## 🔄 Automatic Updates

After the initial setup, any push to the `main` branch will automatically:
- Build the content from markdown files
- Build the Next.js static site
- Deploy to GitHub Pages
- Update your live website in 3-5 minutes

## 📋 What the Workflow Does

1. **Checkout code** from your repository
2. **Setup Node.js** environment
3. **Install dependencies** (npm packages)
4. **Build content** (generates content-data.js from markdown)
5. **Build Next.js site** (creates static HTML/CSS/JS files)
6. **Deploy to GitHub Pages** (uploads built files)

## 🐛 Troubleshooting

### If the workflow fails:
1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies
   - Build errors
   - Permission issues

### If the site doesn't load:
1. Wait 5-10 minutes for DNS propagation
2. Clear browser cache
3. Check if GitHub Pages is enabled
4. Verify the workflow completed successfully

### If you see 404 errors:
- Make sure `basePath: '/gopalvenki'` matches your repository name
- Check that the workflow completed successfully
- Verify GitHub Pages is using GitHub Actions as source

## ✅ Verification Checklist

- [ ] GitHub Pages enabled with GitHub Actions source
- [ ] Workflow permissions set to "Read and write"
- [ ] Workflow running in Actions tab
- [ ] Workflow completed successfully (green checkmark)
- [ ] Website loads at https://pegasusgtv.github.io/gopalvenki/
- [ ] All sections display correctly (About, Education, Skills, Projects)
- [ ] Project detail pages work
- [ ] Mobile responsive design works

## 📞 Need Help?

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Verify all settings in repository Settings → Pages
3. Ensure workflow permissions are correct
4. Check that Next.js build completes without errors

---

**Last Updated**: After adding Education, Skills, and Project detail pages

