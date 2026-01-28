import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Interests = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const interestsData = getSectionContent('interests');
  const { theme } = useTheme();

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
          // Remove leading dash if present
          if (description.startsWith('- ')) {
            description = description.substring(2);
          }
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
      title: "Search-Based Motion Planning",
      description: "Specializing in high-dimensional planning for manipulators and mobile bases. My work focuses on anytime algorithms (like ARA*, MHA*) and experience-based planning (E-Graphs) to solve complex kinematic constraints in real-time, ensuring theoretical guarantees on completeness and optimality.",
      icon: "🗺️"
    },
    {
      title: "Generative AI for Robotics",
      description: "Leveraging modern generative models—including Diffusion Models and Flow Matching—to represent complex multi-modal distributions for robot policies. I explore how these models can serve as learned heuristics to accelerate classical planners in sparse-reward environments.",
      icon: "🤖"
    },
    {
      title: "Multi-Agent Coordination",
      description: "Architecting scalable solutions for Multi-Agent Path Finding (MAPF). I develop decentralized coordination algorithms (like GIF-PIBT) that allow large-scale fleets to navigate shared spaces efficiently, balancing global flow optimization with local collision avoidance.",
      icon: "👥"
    },
    {
      title: "Perception for Planning",
      description: "Moving beyond passive detection to active perception. I integrate semantic scene understanding and 3D reconstruction into the planning loop, allowing agents to make informed decisions based on the geometry and semantics of their environment.",
      icon: "👁️"
    },
    {
      title: "Control & Dynamics",
      description: "Grounding AI in physics. I design robust low-level controllers (MPC, Whole-Body Control) that ensure high-level plans are dynamically feasible. My background in mechanical engineering ensures a tight coupling between software commands and hardware capabilities.",
      icon: "🎛️"
    },
    {
      title: "Simulation & Sim-to-Real",
      description: "Bridging the reality gap. I utilize high-fidelity physics engines (Isaac Gym, MuJoCo) to validate policies at scale before deployment. My workflow involves domain randomization and system identification to ensure code that works in sim works on the real robot.",
      icon: "🔬"
    }
  ];

  return (
    <section id="research" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-blue-50' : 'bg-navy'
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
          }`}>{interestsData?.title || 'Research Interests'}</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
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
              className={`group cursor-pointer rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
                theme === 'light'
                  ? 'bg-white border-gray-200 hover:border-purple-500'
                  : 'bg-lightNavy border-lightestNavy hover:border-accent'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {interest.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-200 ${
                  theme === 'light'
                    ? 'text-gray-900 group-hover:text-purple-600'
                    : 'text-white group-hover:text-accent'
                }`}>
                  {interest.title}
                </h3>
                <p className={`transition-colors duration-200 ${
                  theme === 'light'
                    ? 'text-gray-600 group-hover:text-gray-700'
                    : 'text-lightSlate group-hover:text-lightestSlate'
                }`}>
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
