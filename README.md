# Gopalakrishnan Thirunellai Venkitachalam

A dual-framework personal research portfolio built with React (Next.js) and Vue (Vite), featuring dynamic Markdown content support for publications, projects, and awards.

## 🚀 Quick Start

### Prerequisites
- Node.js 12+ (for React/Vue versions)
- OR just a web browser (for Simple version)

### Local Development

#### Option 1: Simple Portfolio (Recommended for Node.js 12)
```bash
cd simple-portfolio
# Open index.html in your browser
# Or serve with any static server:
python -m http.server 8000
# Visit: http://localhost:8000
```

#### Option 2: React Portfolio (Node.js 12+)
```bash
cd react-portfolio
npm install
npm run dev
```
Visit: http://localhost:3000

#### Option 3: Vue Portfolio (Node.js 14+)
```bash
cd vue-portfolio
npm install
npm run dev
```
Visit: http://localhost:5173

## 📁 Project Structure

```
/
├── simple-portfolio/         # Simple HTML/CSS/JS version (Node.js 12 compatible)
├── react-portfolio/          # React/Next.js portfolio
├── vue-portfolio/            # Vue/Vite portfolio
├── content/                  # Shared Markdown content
│   ├── publications/         # Publication .md files
│   ├── projects/            # Project .md files
│   └── awards/              # Award .md files
└── README.md
```

## ✏️ Adding New Content

### Publications
Create a new `.md` file in `content/publications/`:

```markdown
---
title: "Your Paper Title"
authors: "Author1, Author2"
venue: "Conference Name"
year: 2024
link: "https://example.com"
---

Abstract or summary here.
```

### Projects
Create a new `.md` file in `content/projects/`:

```markdown
---
title: "Project Name"
link: "https://example.com"
---

Project description here.
```

### Awards
Create a new `.md` file in `content/awards/`:

```markdown
---
title: "Award Name"
year: 2024
---

Award description here.
```

## 🚀 Deployment

### GitHub Pages (Automated)

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/PegasusGTV/gopalvenki
   - Click on **Settings** tab
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select **"GitHub Actions"**
   - Click **Save**

3. **Verify Workflow Permissions:**
   - In **Settings** → **Actions** → **General**
   - Scroll to **Workflow permissions**
   - Select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**
   - Click **Save**

4. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (usually 3-5 minutes)

5. **Access Your Portfolio:**
   - Once deployed, visit: **https://pegasusgtv.github.io/gopalvenki/**

#### Automatic Updates

After the initial setup, any push to the `main` branch will automatically:
- Build the Next.js static site
- Deploy to GitHub Pages
- Update your live portfolio in 3-5 minutes

### Vercel Deployment (Alternative)

Both portfolios are also configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

#### Manual Vercel Deployment
```bash
# React
cd react-portfolio
npx vercel

# Vue
cd vue-portfolio
npx vercel
```

## 🛠️ Technologies

- **React Portfolio**: Next.js, Tailwind CSS, Framer Motion
- **Vue Portfolio**: Vue 3, Vite, Tailwind CSS, VueUse Motion
- **Content**: Markdown with frontmatter
- **Styling**: Tailwind CSS with custom academic theme
- **Deployment**: Vercel-ready

## 📧 Contact

- **Email**: gopalakt@andrew.cmu.edu
- **Phone**: +1 (412) 909-7233
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile/)
