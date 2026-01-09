import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';

const Skills = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const skillsData = getSectionContent('skills');

  if (!skillsData) {
    return null;
  }

  // Convert skills object to array of categories
  const skillCategories = Object.entries(skillsData).map(([key, value]) => ({
    title: key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    skills: value,
    icon: getCategoryIcon(key)
  }));

  return (
    <section id="skills" ref={ref} className="py-20 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
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
              className="card group"
            >
              <div className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2 text-lightSlate hover:text-lightestSlate transition-colors duration-200"
                    >
                      <span className="text-accent text-xs">▹</span>
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

// Helper function to get icons for skill categories
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

