import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Awards = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const awards = getAllContent('awards');
  const { theme } = useTheme();

  // Hide section if no awards
  if (awards.length === 0) {
    return null;
  }

  return (
    <section id="awards" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-lightNavy/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`section-title ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Awards & Recognition</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
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
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                theme === 'light' ? 'bg-purple-200' : 'bg-accent/30'
              }`}></div>
              
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
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 z-10 ${
                      theme === 'light'
                        ? 'bg-purple-600 border-blue-50'
                        : 'bg-accent border-navy'
                    }`}></div>
                    
                    {/* Content */}
                    <div className={`ml-16 p-6 rounded-lg border transition-all duration-300 group ${
                      theme === 'light'
                        ? 'bg-white border-purple-200 hover:border-purple-400'
                        : 'bg-lightNavy border-lightestNavy hover:border-accent'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                            theme === 'light'
                              ? 'text-gray-900 group-hover:text-purple-600'
                              : 'text-white group-hover:text-accent'
                          }`}>
                            {award.title}
                          </h3>
                          {award.year && (
                            <div className={`font-medium mb-3 ${
                              theme === 'light' ? 'text-purple-600' : 'text-accent'
                            }`}>
                              {award.year}
                            </div>
                          )}
                          {award.content && (
                            <p className={`transition-colors duration-200 ${
                              theme === 'light'
                                ? 'text-gray-700 group-hover:text-gray-900'
                                : 'text-lightSlate group-hover:text-lightestSlate'
                            }`}>
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
              <div className={`text-lg ${
                theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
              }`}>
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
