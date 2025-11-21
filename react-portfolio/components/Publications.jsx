import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getAllContent } from '../lib/markdown';

const Publications = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const publications = getAllContent('publications');

  // Hide section if no publications
  if (publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" ref={ref} className="py-20 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
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
                className="card group hover:border-accent transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                      {pub.title}
                    </h3>
                    <p className="text-lightSlate mb-3">
                      {pub.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {pub.venue} {pub.year}
                      </span>
                    </div>
                    {pub.content && (
                      <p className="text-lightSlate mt-4 leading-relaxed">
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
                      className="btn-primary whitespace-nowrap self-start lg:self-center"
                    >
                      Read Paper
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-lightSlate text-lg">
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
