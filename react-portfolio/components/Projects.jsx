import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useRouter } from 'next/router';

const Projects = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const projects = getAllContent('projects');
  const router = useRouter();
  const basePath = router.basePath || '';

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
            Selected projects showcasing my work in motion planning, robotics, machine learning, and data analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="card group cursor-pointer overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg bg-lightNavy/50">
                      <img
                        src={`${basePath === '/' ? '' : basePath}/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    {project.content && (
                      <div className="text-lightSlate group-hover:text-lightestSlate transition-colors duration-200 flex-1 text-sm leading-relaxed space-y-2 overflow-y-auto max-h-96">
                        {project.content.split('\n\n').map((para, idx) => {
                          if (!para.trim()) return null;
                          
                          // Check if paragraph starts with bold text (like "**Motivation:**")
                          const boldMatch = para.match(/^\*\*(.*?):\*\*/);
                          if (boldMatch) {
                            const boldText = boldMatch[1];
                            const restText = para.replace(/^\*\*.*?:\*\*\s*/, '');
                            return (
                              <div key={idx} className="mb-2">
                                <strong className="text-white font-semibold">{boldText}:</strong>{' '}
                                <span>{restText}</span>
                              </div>
                            );
                          }
                          
                          // Regular paragraph
                          const parts = para.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={idx} className="mb-2">
                              {parts.map((part, partIdx) => {
                                if (part.match(/\*\*(.*?)\*\*/)) {
                                  return <strong key={partIdx} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                                }
                                return <span key={partIdx}>{part}</span>;
                              })}
                            </p>
                          );
                        })}
                      </div>
                    )}

                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-white mt-4 transition-colors duration-200"
                      >
                        <span className="mr-2">View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-lightSlate text-lg">
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
