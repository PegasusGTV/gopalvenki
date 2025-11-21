import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';

const AboutSection = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const aboutData = getSectionContent('about');

  // Parse markdown content into sections
  const parseContent = (content) => {
    if (!content) return null;
    
    const sections = [];
    const lines = content.split('\n');
    let currentSection = null;
    let currentContent = [];
    
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        // Save previous section
        if (currentSection) {
          sections.push({
            title: currentSection,
            content: currentContent.join('\n').trim()
          });
        }
        // Start new section
        currentSection = line.replace('## ', '').trim();
        currentContent = [];
      } else if (line.trim() === '---') {
        // Separator - save current section if exists
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
    
    // Save last section
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
    <section id="about" ref={ref} className="py-20 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl">{aboutData?.title || 'About Me'}</h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8 mt-4"></div>
          </div>
          
          {/* Introduction - Clean and Spacious */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-lightNavy/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-lightestNavy/20 shadow-xl">
              <div className="text-lightSlate leading-relaxed space-y-6 text-lg md:text-xl">
                {introText ? (
                  introText.split('\n\n').map((para, idx) => (
                    para.trim() && (
                      <p key={idx} className="text-lightSlate leading-relaxed">{para.trim()}</p>
                    )
                  ))
                ) : (
                  <>
                    <p className="text-lightSlate leading-relaxed">
                      Hello! I'm Gopalakrishnan Thirunellai Venkitachalam (Gopal), a Master's student in AI & Robotics Research, 
                      Mechanical Engineering at Carnegie Mellon University. I'm currently working as a Graduate Research Assistant 
                      at the Search Based Planning Lab, Robotics Institute, under the guidance of Prof. Maxim Likhachev.
                    </p>
                    <p className="text-lightSlate leading-relaxed">
                      My research focuses on developing efficient motion planning algorithms for robotics applications, with 
                      particular emphasis on real-time planning for mobile manipulators and multi-agent systems.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sections - Two Column Layout for Better Presentation */}
          {sections && sections.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {sections.map((section, idx) => {
                const lines = section.content.split('\n').filter(l => l.trim());
                const isList = lines.some(l => l.trim().startsWith('- '));
                const isEducation = section.title.includes('Education');
                const isWork = section.title.includes('Work Experience') || section.title.includes('Experience');
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                    className={`bg-lightNavy/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-lightestNavy/20 shadow-xl hover:border-accent/50 hover:shadow-2xl transition-all duration-300 ${isEducation || isWork ? 'lg:col-span-2' : ''}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b-2 border-accent/30">
                      {section.title}
                    </h3>
                    <div className="text-lightSlate leading-relaxed space-y-4">
                      {isList ? (
                        <ul className="space-y-3">
                          {lines.map((line, lineIdx) => {
                            if (line.trim().startsWith('- ')) {
                              const content = line.replace('- ', '').trim();
                              const parts = content.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
                              return (
                                <li key={lineIdx} className="flex items-start gap-3">
                                  <span className="text-accent mt-2">•</span>
                                  <span className="flex-1">
                                    {parts.map((part, partIdx) => {
                                      if (part.match(/\*\*(.*?)\*\*/)) {
                                        return <strong key={partIdx} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                                      }
                                      if (part.match(/\[([^\]]+)\]\(([^)]+)\)/)) {
                                        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                                        return (
                                          <a key={partIdx} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white underline">
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
                                    return <strong key={partIdx} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                                  }
                                  if (part.match(/\[([^\]]+)\]\(([^)]+)\)/)) {
                                    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                                    return (
                                      <a key={partIdx} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white underline">
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

          {/* Research Stats - Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 text-center border border-accent/30 hover:border-accent hover:shadow-xl transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4">4.0</div>
              <div className="text-white text-xl font-medium">GPA at CMU</div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 text-center border border-accent/30 hover:border-accent hover:shadow-xl transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4">2+</div>
              <div className="text-white text-xl font-medium">Years Research Experience</div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 text-center border border-accent/30 hover:border-accent hover:shadow-xl transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4">1+</div>
              <div className="text-white text-xl font-medium">Year Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
