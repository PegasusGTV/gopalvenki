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

### GitHub Pages (Recommended)

#### Quick Deploy
```bash
# Run the deployment script
./deploy-github.sh
```

#### Manual Deploy
1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name it `YOUR_USERNAME.github.io` (for automatic GitHub Pages)
   - Or use any name and enable Pages in Settings

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait 2-5 minutes

4. **Access Your Portfolio:**
   - Visit: `https://YOUR_USERNAME.github.io`
   - Or: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` (if not using .github.io)

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
