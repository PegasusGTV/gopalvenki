import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const skillsData = getSectionContent('skills');
  const { theme } = useTheme();

  if (!skillsData) {
    return null;
  }

  const skillCategories = Object.entries(skillsData).map(([key, value]) => ({
    title: key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    skills: value,
    icon: getCategoryIcon(key)
  }));

  return (
    <section id="skills" ref={ref} className={`py-20 transition-colors duration-300 ${
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
          }`}>Technical Skills</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            A comprehensive overview of my technical expertise across programming languages, frameworks, and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 hover:border-purple-500'
                  : 'bg-lightNavy border-lightestNavy hover:border-accent'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className={`text-xl font-bold transition-colors duration-200 ${
                    theme === 'light'
                      ? 'text-gray-900 group-hover:text-purple-600'
                      : 'text-white group-hover:text-accent'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className={`flex items-center gap-2 transition-colors duration-200 ${
                        theme === 'light'
                          ? 'text-gray-600 hover:text-gray-700'
                          : 'text-lightSlate hover:text-lightestSlate'
                      }`}
                    >
                      <span className={`text-xs ${
                        theme === 'light' ? 'text-purple-600' : 'text-accent'
                      }`}>▹</span>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getCategoryIcon(categoryKey) {
  const iconMap = {
    languages: '💻',
    robotics_simulation: '🤖',
    planning_control: '🗺️',
    ai_perception: '👁️',
    deep_learning_genai: '🧠',
    retrieval_nlp: '📚',
    developer_tools: '🛠️',
    infrastructure_tools: '☁️'
  };
  return iconMap[categoryKey] || '⚙️';
}

export default Skills;
