# Gopalakrishnan Thirunellai Venkitachalam - Research Portfolio

A modern, responsive research portfolio website built with Next.js and React, featuring dynamic content management, individual project pages, and comprehensive sections for education, skills, publications, and projects.

## 🌟 Features

- **Dynamic Project Pages**: Each project has its own dedicated page with detailed information
- **Education Section**: Display academic background with GPA, courses, and specializations
- **Skills Section**: Organized technical skills across multiple categories
- **Publications**: Showcase research publications with markdown support
- **Projects**: Featured projects with images, descriptions, and links
- **Awards**: Display academic and professional achievements
- **Responsive Design**: Mobile-first design with smooth animations
- **Markdown Content**: Easy content management through markdown files

## 🚀 Quick Start

### Prerequisites
- Node.js 12+ 
- npm or yarn

### Local Development

```bash
cd react-portfolio
npm install
npm run dev
```

Visit: http://localhost:3000

### Building for Production

```bash
cd react-portfolio
npm run build
```

The static site will be generated in the `out/` directory.

## 📁 Project Structure

```
react-portfolio/
├── components/          # React components
│   ├── AboutSection.jsx
│   ├── Education.jsx    # Education display component
│   ├── Skills.jsx       # Skills display component
│   ├── Projects.jsx     # Projects grid component
│   ├── ProjectDetail.jsx # Individual project page component
│   ├── Publications.jsx
│   ├── Awards.jsx
│   └── ...
├── pages/               # Next.js pages
│   ├── index.js        # Main page
│   └── projects/
│       └── [slug].js   # Dynamic project pages
├── content/            # Markdown content files
│   ├── projects/       # Project .md files
│   ├── publications/   # Publication .md files
│   └── awards/         # Award .md files
├── lib/
│   ├── content-data.js # Generated content data
│   └── markdown.js     # Markdown utilities
├── public/             # Static assets
│   ├── projects/      # Project images
│   └── profile.jpeg
└── scripts/
    └── build-content.js # Content generation script
```

## ✏️ Adding New Content

### Projects

Create a new `.md` file in `content/projects/`:

```markdown
---
title: "Project Name"
link: "https://example.com"  # Optional external link
image: "projects/project-image.png"  # Path relative to public/
---

Project description here.

**Motivation**: Why this project was created

**Objective**: What the project aims to achieve

**Methods**: How it was implemented

**Results**: Key outcomes and achievements

**My Role**: Your specific contributions
```

After creating the markdown file, run:
```bash
npm run build-content
```

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

### Awards

Create a new `.md` file in `content/awards/`:

```markdown
---
title: "Award Name"
year: 2024
---

Award description here.
```

### Education & Skills

Education and skills are managed through JSON files in the root directory:
- `education.json` - Academic background
- `skills.json` - Technical skills organized by category

These are automatically imported into `content-data.js` during the build process.

## 🎨 Customization

### Styling

The portfolio uses Tailwind CSS with a custom color scheme defined in `tailwind.config.js`. Main colors:
- `navy` - Dark background
- `lightNavy` - Secondary background
- `accent` - Highlight color (cyan/teal)
- `lightSlate` - Text color

### Content Data

Content is managed through `lib/content-data.js`, which is auto-generated from markdown files. To regenerate:

```bash
npm run build-content
```

## 🚀 Deployment

### GitHub Pages

This repository is configured for deployment to GitHub Pages.

#### Setup Instructions

1. **Initialize Git (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add Remote and Push:**
   ```bash
   git remote add origin https://github.com/PegasusGTV/gopalvenki.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/PegasusGTV/gopalvenki
   - Click on **Settings** tab
   - Scroll to **Pages** in the left sidebar
   - Under **Source**, select **"GitHub Actions"** or **"main" branch** with `/out` folder
   - Click **Save**

4. **Access Your Portfolio:**
   - Once deployed, visit: **https://pegasusgtv.github.io/gopalvenki/**

### Vercel Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or manually:
```bash
cd react-portfolio
npx vercel
```

## 🛠️ Technologies

- **Framework**: Next.js 12.3.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: Markdown with frontmatter (gray-matter)
- **Build Tool**: Next.js static export

## 📧 Contact

- **Email**: gopalakt@andrew.cmu.edu
- **GitHub**: [PegasusGTV](https://github.com/PegasusGTV)
- **LinkedIn**: [Gopalakrishnan Thirunellai Venkitachalam](https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam)

## 📝 License

This project is private and personal.

## 🔄 Recent Updates

- ✅ Added individual project detail pages with dynamic routing
- ✅ Implemented Education section with structured data display
- ✅ Created Skills section with categorized technical expertise
- ✅ Enhanced project cards with preview and navigation
- ✅ Improved content management system
- ✅ Updated navigation with Education and Skills links
