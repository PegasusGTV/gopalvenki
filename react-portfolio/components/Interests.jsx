import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';

const Interests = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const interestsData = getSectionContent('interests');

  // Parse interests from markdown content
  const parseInterests = (content) => {
    if (!content) return [];
    
    const interests = [];
    const sections = content.split(/### /).filter(section => section.trim());
    
    sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) return;
      
      const title = lines[0].trim();
      let description = '';
      let icon = '🔬';
      
      lines.forEach(line => {
        if (line.includes('**Description**:')) {
          description = line.replace(/\*\*Description\*\*:\s*/, '').trim();
        }
        if (line.includes('**Icon**:')) {
          icon = line.replace(/\*\*Icon\*\*:\s*/, '').trim();
        }
      });
      
      if (title && description) {
        interests.push({ title, description, icon });
      }
    });
    
    return interests;
  };

  const interests = parseInterests(interestsData?.content) || [
    {
      title: "Motion Planning",
      description: "Developing efficient algorithms for real-time motion planning in robotics, including constant-time planning for mobile manipulators and pathfinding in complex environments.",
      icon: "🗺️"
    },
    {
      title: "Multi-Agent Systems",
      description: "Researching formation control, multi-agent pathfinding (MAPF), and coordination algorithms for collaborative robotic systems.",
      icon: "👥"
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Applying machine learning techniques including reinforcement learning, deep learning, and neural networks to solve robotics and prediction problems.",
      icon: "🤖"
    },
    {
      title: "Computer Vision",
      description: "Developing computer vision solutions for robotics applications, including object detection, semantic segmentation, and visual recognition systems.",
      icon: "👁️"
    },
    {
      title: "Control Systems",
      description: "Designing and implementing control systems for robotic applications, including predictive control and real-time system optimization.",
      icon: "🎛️"
    },
    {
      title: "Data Analytics",
      description: "Analyzing large-scale datasets using statistical methods, clustering, and visualization techniques for engineering applications.",
      icon: "📊"
    }
  ];

  return (
    <section id="research" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{interestsData?.title || 'Research Interests'}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-lightSlate max-w-3xl mx-auto">
            {interestsData?.description || "My research focuses on motion planning, multi-agent systems, machine learning, and robotics, with emphasis on real-time algorithms for practical applications."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="card group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                  {interest.title}
                </h3>
                <p className="text-lightSlate group-hover:text-lightestSlate transition-colors duration-200">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
