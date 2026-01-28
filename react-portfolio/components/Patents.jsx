import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Patents = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const patents = getAllContent('patents');
  const { theme } = useTheme();

  // Hide section if no patents
  if (patents.length === 0) {
    return null;
  }

  const getStatusColor = (status) => {
    if (status?.toLowerCase() === 'filed') {
      return theme === 'light' 
        ? 'bg-yellow-100 text-yellow-800 border-yellow-200' 
        : 'bg-yellow-900/30 text-yellow-400 border-yellow-700';
    } else if (status?.toLowerCase() === 'granted' || status?.toLowerCase() === 'published') {
      return theme === 'light'
        ? 'bg-blue-100 text-blue-800 border-blue-200'
        : 'bg-blue-900/30 text-blue-400 border-blue-700';
    }
    return theme === 'light'
      ? 'bg-gray-100 text-gray-800 border-gray-200'
      : 'bg-gray-800 text-gray-300 border-gray-700';
  };

  return (
    <section id="patents" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-lightNavy/30'
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
            Patents
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            Intellectual property contributions in robotics, medical devices, and engineering systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {patents.length > 0 ? (
            patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-6 md:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white border-purple-200 hover:border-purple-400'
                    : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                          theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                          {patent.title}
                        </h3>
                        <p className={`text-base mb-3 ${
                          theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                        }`}>
                          {patent.authors}
                        </p>
                      </div>
                      {patent.status && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
                          getStatusColor(patent.status)
                        }`}>
                          {patent.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className={`flex flex-wrap items-center gap-4 text-sm mb-4 ${
                      theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
                    }`}>
                      {patent.application_number && (
                        <span className={`px-3 py-1 rounded-full ${
                          theme === 'light'
                            ? 'bg-purple-50 text-purple-700 border border-purple-200'
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {patent.country || 'Indian'} Patent Application No: {patent.application_number}
                        </span>
                      )}
                      {patent.date && (
                        <span>
                          Filed {patent.date}
                        </span>
                      )}
                      {patent.year && !patent.date && (
                        <span>
                          {patent.year}
                        </span>
                      )}
                    </div>
                    {patent.content && (
                      <div className={`mt-4 leading-relaxed ${
                        theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                      }`}>
                        {patent.content.split('\n').map((paragraph, idx) => {
                          if (!paragraph.trim()) return null;
                          // Check if it's a bold header
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            const header = paragraph.replace(/\*\*/g, '');
                            return (
                              <p key={idx} className={`font-semibold mt-4 mb-2 ${
                                theme === 'light' ? 'text-gray-900' : 'text-white'
                              }`}>
                                {header}
                              </p>
                            );
                          }
                          return (
                            <p key={idx} className="mb-2">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className={`text-center py-12 ${
              theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
            }`}>
              <div className="text-lg">
                No patents available at the moment.
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Patents;

