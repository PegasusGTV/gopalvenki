import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const educationData = getSectionContent('education');
  const { theme } = useTheme();

  if (!educationData || !educationData.length) {
    return null;
  }

  return (
    <section id="education" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-navy'
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
          }`}>Education</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            Academic background and relevant coursework in robotics, AI, and mechanical engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 hover:border-purple-500'
                  : 'bg-lightNavy border-lightestNavy hover:border-accent'
              }`}
            >
              <div className="mb-4">
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-200 ${
                  theme === 'light'
                    ? 'text-gray-900 group-hover:text-purple-600'
                    : 'text-white group-hover:text-accent'
                }`}>
                  {edu.institution}
                </h3>
                <p className={`text-sm font-medium ${
                  theme === 'light' ? 'text-purple-600' : 'text-accent'
                }`}>{edu.location}</p>
              </div>

              <div className="mb-4">
                <p className={`text-lg font-semibold mb-1 ${
                  theme === 'light' ? 'text-gray-800' : 'text-lightestSlate'
                }`}>
                  {edu.degree}
                </p>
                {edu.specialization && (
                  <p className={`text-sm italic ${
                    theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
                  }`}>
                    {edu.specialization}
                  </p>
                )}
              </div>

              <div className={`mb-6 flex flex-wrap gap-4 text-sm ${
                theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
              }`}>
                <div className="flex items-center gap-2">
                  <span>GPA:</span>
                  <span className={`font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>{edu.gpa}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Graduation:</span>
                  <span className={`font-semibold ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>{edu.graduation_date}</span>
                </div>
              </div>

              {edu.relevant_courses && edu.relevant_courses.length > 0 && (
                <div className={`pt-4 border-t ${
                  theme === 'light' ? 'border-gray-200' : 'border-lightNavy'
                }`}>
                  <h4 className={`font-semibold mb-3 text-sm ${
                    theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant_courses.map((course, courseIdx) => (
                      <span
                        key={courseIdx}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors duration-200 ${
                          theme === 'light'
                            ? 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-500 hover:bg-purple-100'
                            : 'bg-lightNavy/50 text-lightSlate border-lightestNavy/20 hover:border-accent/50 hover:text-accent'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
