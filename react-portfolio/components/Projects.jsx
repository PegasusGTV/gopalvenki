import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
              <Link key={index} href={`/projects/${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="card group cursor-pointer overflow-hidden h-full"
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
                        <div className="text-lightSlate group-hover:text-lightestSlate transition-colors duration-200 flex-1 text-sm leading-relaxed space-y-2 overflow-hidden">
                          {/* Show only first paragraph as preview */}
                          {(() => {
                            const firstPara = project.content.split('\n\n')[0];
                            if (!firstPara.trim()) return null;
                            
                            // Remove markdown bold formatting for preview
                            const preview = firstPara.replace(/\*\*/g, '').substring(0, 150);
                            return (
                              <p className="mb-2">
                                {preview}
                                {firstPara.length > 150 ? '...' : ''}
                              </p>
                            );
                          })()}
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-lightNavy/50">
                        <div className="inline-flex items-center text-accent hover:text-white transition-colors duration-200 group/link">
                          <span className="mr-2">View Details</span>
                          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
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
