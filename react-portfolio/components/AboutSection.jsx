import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const aboutData = getSectionContent('about');
  const { theme } = useTheme();

  // Parse markdown content into sections
  const parseContent = (content) => {
    if (!content) return null;
    
    const sections = [];
    const lines = content.split('\n');
    let currentSection = null;
    let currentContent = [];
    
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        if (currentSection) {
          sections.push({
            title: currentSection,
            content: currentContent.join('\n').trim()
          });
        }
        currentSection = line.replace('## ', '').trim();
        currentContent = [];
      } else if (line.trim() === '---') {
        if (currentSection && currentContent.length > 0) {
          sections.push({
            title: currentSection,
            content: currentContent.join('\n').trim()
          });
          currentSection = null;
          currentContent = [];
        }
      } else if (line.trim()) {
        currentContent.push(line);
      }
    });
    
    if (currentSection && currentContent.length > 0) {
      sections.push({
        title: currentSection,
        content: currentContent.join('\n').trim()
      });
    }
    
    return sections;
  };

  const sections = aboutData?.content ? parseContent(aboutData.content) : null;
  const introText = aboutData?.content ? aboutData.content.split('##')[0].trim() : null;

  return (
    <section id="about" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-lightNavy/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className={`section-title text-4xl md:text-5xl ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {aboutData?.title || 'About Me'}
            </h2>
            <div className={`w-32 h-1 mx-auto mb-8 mt-4 ${
              theme === 'light' ? 'bg-purple-600' : 'bg-accent'
            }`}></div>
          </div>
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className={`backdrop-blur-sm rounded-2xl p-8 md:p-12 border shadow-xl ${
              theme === 'light'
                ? 'bg-white border-gray-200'
                : 'bg-lightNavy/50 border-lightestNavy/20'
            }`}>
              <div className={`leading-relaxed space-y-6 text-lg md:text-xl ${
                theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
              }`}>
                {introText ? (
                  introText.split('\n\n').map((para, idx) => (
                    para.trim() && (
                      <p key={idx} className="leading-relaxed">{para.trim()}</p>
                    )
                  ))
                ) : (
                  <>
                    <p className="leading-relaxed">
                      Hello! I'm Gopalakrishnan Thirunellai Venkitachalam (Gopal), a Master's student in AI & Robotics Research, 
                      Mechanical Engineering at Carnegie Mellon University. I'm currently working as a Graduate Research Assistant 
                      at the Search Based Planning Lab, Robotics Institute, under the guidance of Prof. Maxim Likhachev.
                    </p>
                    <p className="leading-relaxed">
                      My research focuses on developing efficient motion planning algorithms for robotics applications, with 
                      particular emphasis on real-time planning for mobile manipulators and multi-agent systems.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sections - Two Column Layout */}
          {sections && sections.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {sections.map((section, idx) => {
                const lines = section.content.split('\n').filter(l => l.trim());
                const isList = lines.some(l => l.trim().startsWith('- ') || l.trim().startsWith('*'));
                const isEducation = section.title.includes('Education');
                const isWork = section.title.includes('Work Experience') || section.title.includes('Experience');
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                    className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 border shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      isEducation || isWork ? 'lg:col-span-2' : ''
                    } ${
                      theme === 'light'
                        ? 'bg-white border-gray-200 hover:border-purple-500'
                        : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
                    }`}
                  >
                    <h3 className={`text-2xl md:text-3xl font-bold mb-6 pb-4 border-b-2 ${
                      theme === 'light'
                        ? 'text-gray-900 border-purple-200'
                        : 'text-white border-accent/30'
                    }`}>
                      {section.title}
                    </h3>
                    <div className={`leading-relaxed space-y-4 ${
                      theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                    }`}>
                      {isList ? (
                        <ul className="space-y-3">
                          {lines.map((line, lineIdx) => {
                            if (line.trim().startsWith('- ') || line.trim().startsWith('*')) {
                              const content = line.replace(/^[-*]\s+/, '').trim();
                              const parts = content.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
                              return (
                                <li key={lineIdx} className="flex items-start gap-3">
                                  <span className={`mt-2 ${
                                    theme === 'light' ? 'text-purple-600' : 'text-accent'
                                  }`}>•</span>
                                  <span className="flex-1">
                                    {parts.map((part, partIdx) => {
                                      if (part.match(/\*\*(.*?)\*\*/)) {
                                        return <strong key={partIdx} className={`font-semibold ${
                                          theme === 'light' ? 'text-gray-900' : 'text-white'
                                        }`}>{part.replace(/\*\*/g, '')}</strong>;
                                      }
                                      if (part.match(/\[([^\]]+)\]\(([^)]+)\)/)) {
                                        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                                        return (
                                          <a key={partIdx} href={match[2]} target="_blank" rel="noopener noreferrer" className={`underline ${
                                            theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-accent hover:text-white'
                                          }`}>
                                            {match[1]}
                                          </a>
                                        );
                                      }
                                      return <span key={partIdx}>{part}</span>;
                                    })}
                                  </span>
                                </li>
                              );
                            }
                            return null;
                          })}
                        </ul>
                      ) : (
                        <div className="space-y-4">
                          {lines.map((line, lineIdx) => {
                            if (!line.trim()) return null;
                            const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
                            return (
                              <p key={lineIdx} className="text-lg leading-relaxed">
                                {parts.map((part, partIdx) => {
                                  if (part.match(/\*\*(.*?)\*\*/)) {
                                    return <strong key={partIdx} className={`font-semibold ${
                                      theme === 'light' ? 'text-gray-900' : 'text-white'
                                    }`}>{part.replace(/\*\*/g, '')}</strong>;
                                  }
                                  if (part.match(/\[([^\]]+)\]\(([^)]+)\)/)) {
                                    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                                    return (
                                      <a key={partIdx} href={match[2]} target="_blank" rel="noopener noreferrer" className={`underline ${
                                        theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-accent hover:text-white'
                                      }`}>
                                        {match[1]}
                                      </a>
                                    );
                                  }
                                  return <span key={partIdx}>{part}</span>;
                                })}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Research Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className={`rounded-2xl p-8 text-center border hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>4.0</div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>GPA at CMU</div>
            </div>
            <div className={`rounded-2xl p-8 text-center border hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>2+</div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Years Research Experience</div>
            </div>
            <div className={`rounded-2xl p-8 text-center border hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>1+</div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Year Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
