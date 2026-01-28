const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Content directory path
const contentDirectory = path.join(__dirname, '..', '..', 'content');
const rootDirectory = path.join(__dirname, '..', '..');

// Load markdown files from content directory
function loadMarkdownFiles(directory) {
  try {
    const fullPath = path.join(contentDirectory, directory);
    if (!fs.existsSync(fullPath)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(fullPath);
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));
    
    return markdownFiles.map(fileName => {
      const fullFilePath = path.join(fullPath, fileName);
      const fileContents = fs.readFileSync(fullFilePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...data,
        content: content.trim(),
        slug: fileName.replace(/\.md$/, '')
      };
    });
  } catch (error) {
    console.error(`Error loading markdown files from ${directory}:`, error);
    return [];
  }
}

// Load single markdown file
function loadMarkdownFile(fileName) {
  try {
    const fullPath = path.join(contentDirectory, `${fileName}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      content: content.trim()
    };
  } catch (error) {
    console.error(`Error loading markdown file ${fileName}:`, error);
    return null;
  }
}

// Load projects from project_details.json
function loadProjectsFromJSON() {
  try {
    const jsonPath = path.join(rootDirectory, 'project_details.json');
    if (!fs.existsSync(jsonPath)) {
      return [];
    }
    
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const projects = JSON.parse(fileContents);
    
    return projects.map((project, index) => {
      // Convert description array to formatted content
      const content = project.description.join('\n\n');
      
      // Generate slug from title
      const slug = project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      return {
        ...project,
        content: content,
        slug: slug || `project-${index}`,
        description: project.description // Keep original array for component use
      };
    });
  } catch (error) {
    console.error('Error loading projects from JSON:', error);
    return [];
  }
}

// Generate content data
function generateContentData() {
  // Load projects from JSON (priority) or fallback to markdown
  const projectsFromJSON = loadProjectsFromJSON();
  const projectsFromMarkdown = loadMarkdownFiles('projects');
  const projects = projectsFromJSON.length > 0 ? projectsFromJSON : projectsFromMarkdown;
  
  const contentData = {
    publications: loadMarkdownFiles('publications'),
    patents: loadMarkdownFiles('patents'),
    projects: projects,
    awards: loadMarkdownFiles('awards'),
    hero: loadMarkdownFile('hero'),
    about: loadMarkdownFile('about'),
    contact: loadMarkdownFile('contact'),
    interests: loadMarkdownFile('interests'),
    research: loadMarkdownFile('research'),
    experience: loadMarkdownFile('experience'),
    navbar: loadMarkdownFile('navbar'),
    footer: loadMarkdownFile('footer')
  };

  return contentData;
}

// Write content data to a file
function writeContentData() {
  const contentData = generateContentData();
  const outputPath = path.join(__dirname, '..', 'lib', 'content-data.js');
  
  const content = `// Auto-generated content data
export const contentData = ${JSON.stringify(contentData, null, 2)};

export function getAllContent(type) {
  return contentData[type] || [];
}

export function getContentBySlug(type, slug) {
  const allContent = getAllContent(type);
  return allContent.find(item => item.slug === slug) || null;
}

export function getSectionContent(sectionName) {
  return contentData[sectionName] || null;
}
`;

  fs.writeFileSync(outputPath, content);
  console.log('Content data generated successfully!');
}

// Run the script
writeContentData();
