import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';

const Education = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const educationData = getSectionContent('education');

  if (!educationData || !educationData.length) {
    return null;
  }

  return (
    <section id="education" ref={ref} className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
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
              className="card group"
            >
              <div className="p-6 md:p-8">
                {/* Institution and Location */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                    {edu.institution}
                  </h3>
                  <p className="text-accent text-sm font-medium">{edu.location}</p>
                </div>

                {/* Degree and Specialization */}
                <div className="mb-4">
                  <p className="text-lg text-lightestSlate font-semibold mb-1">
                    {edu.degree}
                  </p>
                  {edu.specialization && (
                    <p className="text-lightSlate text-sm italic">
                      {edu.specialization}
                    </p>
                  )}
                </div>

                {/* GPA and Graduation Date */}
                <div className="mb-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lightSlate">GPA:</span>
                    <span className="text-white font-semibold">{edu.gpa}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lightSlate">Graduation:</span>
                    <span className="text-white font-semibold">{edu.graduation_date}</span>
                  </div>
                </div>

                {/* Relevant Courses */}
                {edu.relevant_courses && edu.relevant_courses.length > 0 && (
                  <div className="pt-4 border-t border-lightNavy">
                    <h4 className="text-white font-semibold mb-3 text-sm">Relevant Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant_courses.map((course, courseIdx) => (
                        <span
                          key={courseIdx}
                          className="px-3 py-1 bg-lightNavy/50 text-lightSlate text-xs rounded-full border border-lightestNavy/20 hover:border-accent/50 hover:text-accent transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

