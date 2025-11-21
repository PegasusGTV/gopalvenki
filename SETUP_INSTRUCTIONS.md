# Setup and Running Instructions

## 🚀 Quick Start Guide

Follow these steps to get your portfolio website running:

### Step 1: Navigate to the React Portfolio Directory
```bash
cd react-portfolio
```

### Step 2: Install Dependencies (if not already installed)
```bash
npm install
```

### Step 3: Rebuild Content Data
This step is **important** - it regenerates the content data from all your markdown files:
```bash
npm run build-content
```

This will:
- Read all your markdown files from the `content/` directory
- Generate `lib/content-data.js` with all your updated content
- Include your new `research.md` file
- Update all your personalized information

### Step 4: Run Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

You can now:
- View your portfolio with all your personalized content
- See your profile photo
- Check that Publications and Awards sections are hidden
- Verify all your information is correct

### Step 5: Build for Production (when ready to deploy)
```bash
npm run build
```

This will:
- Rebuild content data
- Build the Next.js application
- Export static files to the `out/` directory
- Prepare everything for GitHub Pages deployment

---

## 📋 What Was Updated

✅ **Profile**: Your photo and name (Gopalakrishnan Thirunellai Venkitachalam)  
✅ **Publications**: Removed (sections hidden)  
✅ **Awards**: Removed (sections hidden)  
✅ **Interests**: Updated with your research areas  
✅ **Research**: Created `research.md` with your current research  
✅ **About**: Updated with your background  
✅ **Projects**: Ready with your project files  
✅ **Social Links**: GitHub, LinkedIn, Email updated  
✅ **Navigation**: Publications and Awards removed from navbar  
✅ **Config**: Updated for GitHub Pages deployment  

---

## 🌐 Deploying to GitHub Pages

Once everything looks good locally:

### 1. Commit and Push Your Changes
```bash
cd /home/necromancer/Desktop/Personal/website/Gopal
git add .
git commit -m "Personalize portfolio with Gopal's information"
git push -u origin main
```

### 2. Enable GitHub Pages (if not already done)
- Go to: https://github.com/PegasusGTV/gopalvenki/settings/pages
- Under "Source", select **"GitHub Actions"**
- Click **"Save"**

### 3. Set Workflow Permissions
- Go to: https://github.com/PegasusGTV/gopalvenki/settings/actions
- Under "Workflow permissions", select **"Read and write permissions"**
- Check **"Allow GitHub Actions to create and approve pull requests"**
- Click **"Save"**

### 4. Monitor Deployment
- Go to: https://github.com/PegasusGTV/gopalvenki/actions
- Watch the "Deploy to GitHub Pages" workflow
- Wait for it to complete (usually 3-5 minutes)

### 5. Access Your Site
Once deployed, visit: **https://pegasusgtv.github.io/gopalvenki/**

---

## 🔧 Troubleshooting

### If content doesn't update:
1. Make sure you ran `npm run build-content`
2. Restart the dev server: `npm run dev`

### If images don't show:
- Check that `profile.jpeg` exists in `react-portfolio/public/`
- Verify the image path in `hero.md` is correct

### If build fails:
- Check that all markdown files are valid
- Ensure all dependencies are installed: `npm install`
- Check for any syntax errors in the markdown files

### If GitHub Pages deployment fails:
- Check the Actions tab for error messages
- Verify the workflow file exists: `.github/workflows/deploy.yml`
- Ensure GitHub Pages is enabled with GitHub Actions source

---

## 📝 Next Steps

After everything is running:

1. **Review your content**: Check all sections display correctly
2. **Update projects**: Edit project files in `content/projects/` if needed
3. **Customize styling**: Modify `styles/globals.css` if you want to change colors/themes
4. **Add more content**: Create new markdown files in `content/` directories

---

## 🎉 You're All Set!

Your portfolio is now personalized and ready to deploy. The site will automatically rebuild and redeploy whenever you push changes to the `main` branch.

