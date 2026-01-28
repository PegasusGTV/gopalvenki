import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Research = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const researchData = getSectionContent('research');
  const { theme } = useTheme();

  // Parse research areas from content
  const parseResearchAreas = (content) => {
    if (!content) return [];
    
    const areas = [];
    const sections = content.split(/### /).filter(section => section.trim());
    
    sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) return;
      
      const title = lines[0].trim();
      let description = '';
      
      // Get description from remaining lines
      const descLines = lines.slice(1).filter(line => !line.startsWith('#'));
      description = descLines.join(' ').trim();
      
      if (title && description) {
        // Determine icon based on title
        let icon = '🔬';
        if (title.toLowerCase().includes('experience') || title.toLowerCase().includes('graph') || title.toLowerCase().includes('tmeg')) {
          icon = '🧠';
        } else if (title.toLowerCase().includes('constant') || title.toLowerCase().includes('ctmp') || title.toLowerCase().includes('time')) {
          icon = '⚡';
        } else if (title.toLowerCase().includes('flow') || title.toLowerCase().includes('locomotion') || title.toLowerCase().includes('matching')) {
          icon = '🌊';
        } else if (title.toLowerCase().includes('multi-agent') || title.toLowerCase().includes('swarm')) {
          icon = '👥';
        } else if (title.toLowerCase().includes('deception')) {
          icon = '🎭';
        }
        
        areas.push({ title, description, icon });
      }
    });
    
    return areas;
  };

  const researchAreas = researchData?.content ? parseResearchAreas(researchData.content) : [
    {
      title: "Task-Metric Experience Graphs (TMEG) for Dynamic Manipulation",
      description: "Developing frameworks that adapt cached motion plans to dynamic constraints, solving the \"static world\" limitation of standard Experience Graphs. I focus on offline-to-online planning frameworks that leverage task-metric diversity in cached solutions and enable efficient real-time adaptation for contact-rich manipulation tasks.",
      icon: "🧠"
    },
    {
      title: "Flow Matching for Locomotion",
      description: "Developing novel planning frameworks using flow matching techniques to generate smooth, natural locomotion trajectories for legged robots. Exploring how continuous normalizing flows can capture complex motion patterns and enable efficient trajectory generation for dynamic locomotion tasks.",
      icon: "🌊"
    }
  ];

  return (
    <section id="research" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-lightNavy/30'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🔬</span>
            <h2 className={`text-4xl md:text-5xl font-bold ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {researchData?.title || 'Research Focus'}
            </h2>
          </div>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <p className={`text-center text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${
            theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
          }`}>
            {researchData?.description || "My research primarily focuses on Motion Planning and Multi-Agent Systems. Specifically, my work encompasses two key areas:"}
          </p>
        </motion.div>

        {/* Research Area Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`grid gap-6 ${
            researchAreas.length === 2 
              ? 'grid-cols-1 md:grid-cols-2' 
              : researchAreas.length === 3
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2'
          }`}
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`rounded-2xl p-6 md:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white border-purple-200 hover:border-purple-400'
                  : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0">{area.icon}</span>
                <h3 className={`text-xl md:text-2xl font-bold leading-tight ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {area.title}
                </h3>
              </div>
              <p className={`leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
              }`}>
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;

