import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';

const Awards = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const awards = getAllContent('awards');

  // Hide section if no awards
  if (awards.length === 0) {
    return null;
  }

  return (
    <section id="awards" ref={ref} className="py-20 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
            Recognition for academic excellence and research contributions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {awards.length > 0 ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              
              <div className="space-y-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-navy z-10"></div>
                    
                    {/* Content */}
                    <div className="ml-16 bg-lightNavy p-6 rounded-lg border border-lightestNavy hover:border-accent transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                            {award.title}
                          </h3>
                          {award.year && (
                            <div className="text-accent font-medium mb-3">
                              {award.year}
                            </div>
                          )}
                          {award.content && (
                            <p className="text-lightSlate group-hover:text-lightestSlate transition-colors duration-200">
                              {award.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-lightSlate text-lg">
                No awards available at the moment.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
