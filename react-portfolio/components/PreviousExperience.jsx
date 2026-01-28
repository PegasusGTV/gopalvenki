import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const PreviousExperience = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const experienceData = getSectionContent('experience');
  const { theme } = useTheme();

  // Parse previous experience from content
  const parseExperience = (content) => {
    if (!content) return [];
    
    const experiences = [];
    // Split by ### to get individual experience sections
    const sections = content.split(/### /).filter(section => section.trim() && !section.startsWith('##'));
    
    sections.forEach(section => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) return;
      
      const title = lines[0].trim();
      let advisor = '';
      let affiliation = '';
      let duration = '';
      let location = '';
      let description = '';
      
      lines.forEach((line, idx) => {
        if (idx === 0) return; // Skip title line
        
        if (line.includes('**Guided by:**')) {
          advisor = line.replace(/\*\*Guided by:\*\*\s*/, '').trim();
        } else if (line.includes('**Company:**')) {
          affiliation = line.replace(/\*\*Company:\*\*\s*/, '').trim();
        } else if (line.includes('**Affiliation:**')) {
          affiliation = line.replace(/\*\*Affiliation:\*\*\s*/, '').trim();
        } else if (line.includes('**Duration:**')) {
          duration = line.replace(/\*\*Duration:\*\*\s*/, '').trim();
        } else if (line.includes('**Location:**')) {
          location = line.replace(/\*\*Location:\*\*\s*/, '').trim();
        } else if (!line.startsWith('**') && line.trim() && !line.startsWith('##')) {
          description += line.trim() + ' ';
        }
      });
      
      if (title && description) {
        // Combine duration and location if both exist
        const fullDuration = location ? `${duration} • ${location}` : duration;
        
        experiences.push({ 
          title, 
          advisor: advisor || '', 
          affiliation: affiliation || '', 
          duration: fullDuration || '', 
          description: description.trim() 
        });
      }
    });
    
    return experiences;
  };

  const experiences = experienceData?.content ? parseExperience(experienceData.content) : [];

  // Parse markdown formatting
  const parseMarkdown = (text) => {
    if (!text) return [];
    
    const parts = [];
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
      }
      
      if (match[0].startsWith('**')) {
        parts.push({ type: 'bold', content: match[0].replace(/\*\*/g, '') });
      } else if (match[0].startsWith('[')) {
        const linkMatch = match[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          parts.push({ type: 'link', text: linkMatch[1], url: linkMatch[2] });
        }
      }
      
      lastIndex = regex.lastIndex;
    }
    
    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.substring(lastIndex) });
    }
    
    return parts.length > 0 ? parts : [{ type: 'text', content: text }];
  };

  return (
    <section ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-navy'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Previous Experience */}
        {experiences.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h2 className={`text-4xl md:text-5xl font-bold ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {experienceData?.title || 'Previous Experience'}
                </h2>
              </div>
              <div className={`w-24 h-1 mx-auto mb-8 ${
                theme === 'light' ? 'bg-purple-600' : 'bg-accent'
              }`}></div>
            </motion.div>

            <div className="space-y-6 mb-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.1 + (index * 0.1) }}
                  className={`rounded-2xl p-6 md:p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white border-purple-200 hover:border-purple-400'
                      : 'bg-lightNavy/50 border-lightestNavy/20 hover:border-accent/50'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>
                        {exp.title}
                      </h3>
                      {exp.advisor && (
                        <p className={`text-base mb-1 ${
                          theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                        }`}>
                          <span className="font-semibold">Guided by:</span>{' '}
                          {parseMarkdown(exp.advisor).map((part, idx) => {
                            if (part.type === 'link') {
                              return (
                                <a
                                  key={idx}
                                  href={part.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`font-medium hover:underline ${
                                    theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-accent hover:text-white'
                                  }`}
                                >
                                  {part.text}
                                </a>
                              );
                            }
                            return <span key={idx}>{part.content}</span>;
                          })}
                        </p>
                      )}
                    </div>
                    {exp.affiliation && (
                      <div className={`text-right mt-2 md:mt-0 ${
                        theme === 'light' ? 'text-purple-600' : 'text-accent'
                      }`}>
                        {parseMarkdown(exp.affiliation).map((part, idx) => {
                          if (part.type === 'link') {
                            return (
                              <a
                                key={idx}
                                href={part.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:underline"
                              >
                                {part.text}
                              </a>
                            );
                          }
                          return <span key={idx} className="font-medium">{part.content}</span>;
                        })}
                      </div>
                    )}
                  </div>
                  {exp.duration && (
                    <p className={`text-sm mb-4 ${
                      theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
                    }`}>
                      {exp.duration}
                    </p>
                  )}
                  <p className={`leading-relaxed ${
                    theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
                  }`}>
                    {parseMarkdown(exp.description).map((part, idx) => {
                      if (part.type === 'bold') {
                        return (
                          <strong key={idx} className={`font-semibold ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                            {part.content}
                          </strong>
                        );
                      }
                      return <span key={idx}>{part.content}</span>;
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Future Vision */}
        {experienceData?.future_vision && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🔭</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Future Vision
              </h2>
            </div>
            <div className={`w-24 h-1 mx-auto mb-6 ${
              theme === 'light' ? 'bg-purple-600' : 'bg-accent'
            }`}></div>
            <div className={`rounded-2xl p-6 md:p-8 border shadow-lg ${
              theme === 'light'
                ? 'bg-white border-purple-200'
                : 'bg-lightNavy/50 border-lightestNavy/20'
            }`}>
              <p className={`text-lg md:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
              }`}>
                {experienceData.future_vision}
              </p>
            </div>
          </motion.div>
        )}

        {/* Beyond Research */}
        {experienceData?.beyond_research && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">☕</span>
              <h2 className={`text-4xl md:text-5xl font-bold ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Beyond Research
              </h2>
            </div>
            <div className={`w-24 h-1 mx-auto mb-6 ${
              theme === 'light' ? 'bg-purple-600' : 'bg-accent'
            }`}></div>
            <div className={`rounded-2xl p-6 md:p-8 border shadow-lg ${
              theme === 'light'
                ? 'bg-white border-purple-200'
                : 'bg-lightNavy/50 border-lightestNavy/20'
            }`}>
              <p className={`text-lg md:text-xl leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-lightSlate'
              }`}>
                {experienceData.beyond_research}
              </p>
            </div>
          </motion.div>
        )}

        {/* Summary Statistics */}
        {experienceData?.stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className={`rounded-2xl p-8 text-center border shadow-lg hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>
                {experienceData.stats.research_years || '2+'}
              </div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Years Research Experience
              </div>
            </div>
            <div className={`rounded-2xl p-8 text-center border shadow-lg hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>
                {experienceData.stats.job_years || '1+'}
              </div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Years Job Experience
              </div>
            </div>
            <div className={`rounded-2xl p-8 text-center border shadow-lg hover:shadow-xl transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-500'
                : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:border-accent'
            }`}>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                theme === 'light' ? 'text-purple-600' : 'text-accent'
              }`}>
                {experienceData.stats.publications_patents || '1+'}
              </div>
              <div className={`text-xl font-medium ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Publications & Patents
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PreviousExperience;

