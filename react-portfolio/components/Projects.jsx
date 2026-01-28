import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const Projects = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const projects = getAllContent('projects');
  const { theme } = useTheme();
  const [expandedCards, setExpandedCards] = useState(new Set([0])); // First card expanded by default

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const getLinkLabel = (link) => {
    if (!link) return null;
    if (link.includes('github.com')) return 'GitHub';
    if (link.includes('drive.google.com') && link.includes('presentation')) return 'Slides';
    if (link.includes('drive.google.com') && link.includes('file')) return 'Report';
    if (link.includes('paper') || link.includes('arxiv')) return 'Paper';
    return 'View';
  };

  const getLinkType = (link) => {
    if (!link) return null;
    if (link.includes('github.com')) return 'github';
    if (link.includes('drive.google.com') && link.includes('presentation')) return 'slides';
    if (link.includes('drive.google.com') && link.includes('file')) return 'report';
    return 'link';
  };

  return (
    <section id="projects" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-navy'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Projects
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            Selected projects showcasing my work in AI and robotics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {projects.length > 0 ? (
            projects.map((project, index) => {
              const isExpanded = expandedCards.has(index);
              const description = project.description || (project.content ? project.content.split('\n\n') : []);
              const links = project.links || (project.link ? [project.link] : []);
              
              // Get first paragraph for preview
              const preview = description.length > 0 
                ? description[0].substring(0, 200) + (description[0].length > 200 ? '...' : '')
                : '';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    theme === 'light'
                      ? 'bg-white border-purple-200 hover:border-purple-400'
                      : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    {/* Header with title and action buttons */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className={`text-xl md:text-2xl font-bold flex-1 ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Action buttons */}
                      <div className="flex gap-2 flex-shrink-0">
                        {links.map((link, linkIndex) => {
                          const label = getLinkLabel(link);
                          if (!label) return null;
                          return (
                            <motion.a
                              key={linkIndex}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                                theme === 'light'
                                  ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                                  : 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
                              }`}
                            >
                              {label}
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project metadata */}
                    {(project.location || project.role || project.advisor || project.date) && (
                      <div className={`flex flex-wrap gap-4 text-sm mb-4 ${
                        theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
                      }`}>
                        {project.location && (
                          <span>{project.location}</span>
                        )}
                        {project.role && (
                          <span>• {project.role}</span>
                        )}
                        {project.advisor && (
                          <span>• {project.advisor}</span>
                        )}
                        {project.date && (
                          <span>• {project.date}</span>
                        )}
                      </div>
                    )}

                    {/* Description - expanded or collapsed */}
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`space-y-3 mb-4 ${
                          theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                        }`}
                      >
                        {description.map((para, paraIndex) => (
                          <p key={paraIndex} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </motion.div>
                    ) : (
                      <p className={`mb-4 leading-relaxed ${
                        theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
                      }`}>
                        {preview}
                      </p>
                    )}

                    {/* Expand/Collapse button */}
                    <div className={`flex justify-center pt-4 border-t ${
                      theme === 'light' ? 'border-gray-200' : 'border-lightNavy/50'
                    }`}>
                      <motion.button
                        onClick={() => toggleCard(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                          theme === 'light'
                            ? 'border-purple-300 text-purple-600 hover:border-purple-500 hover:bg-purple-50'
                            : 'border-accent/50 text-accent hover:border-accent hover:bg-accent/10'
                        }`}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        {isExpanded ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className={`text-center py-12 ${
              theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
            }`}>
              <div className="text-lg">
                No projects available at the moment.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
