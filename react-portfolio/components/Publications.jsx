import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Publications = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const publications = getAllContent('publications');
  const { theme } = useTheme();

  // Hide section if no publications
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" ref={ref} className={`py-20 transition-colors duration-300 ${
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
          }`}>Publications</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            My research contributions in multi-agent reinforcement learning, robotics, and AI systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {publications.length > 0 ? (
            publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-6 md:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white border-purple-200 hover:border-purple-400'
                    : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 transition-colors duration-200 ${
                      theme === 'light'
                        ? 'text-gray-900 group-hover:text-purple-600'
                        : 'text-white group-hover:text-accent'
                    }`}>
                      {pub.title}
                    </h3>
                    <p className={`mb-3 ${
                      theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                    }`}>
                      {pub.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className={`px-3 py-1 rounded-full ${
                        theme === 'light'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {pub.venue} {pub.year}
                      </span>
                    </div>
                    {pub.content && (
                      <p className={`mt-4 leading-relaxed ${
                        theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                      }`}>
                        {pub.content}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap self-start lg:self-center ${
                        theme === 'light'
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-accent text-navy hover:bg-accent/90'
                      }`}
                    >
                      Read Paper
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className={`text-lg ${
                theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
              }`}>
                No publications available at the moment.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
