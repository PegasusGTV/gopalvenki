import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const aboutData = getSectionContent('about');
  const { theme } = useTheme();

  // Parse the intro text and extract lines
  const parseIntroText = (content) => {
    if (!content) return [];
    
    // Get text before first ## or ---
    const introText = content.split(/##|---/)[0].trim();
    if (!introText) return [];
    
    // Split by lines and filter empty ones
    const lines = introText.split('\n').filter(line => line.trim());
    return lines;
  };

  const introLines = aboutData?.content ? parseIntroText(aboutData.content) : [];

  // Helper to parse markdown links and bold text
  const parseMarkdown = (text) => {
    if (!text) return [];
    
    const parts = [];
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
      }
      
      // Add match
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
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.substring(lastIndex) });
    }
    
    return parts.length > 0 ? parts : [{ type: 'text', content: text }];
  };

  return (
    <section id="about" ref={ref} className={`py-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-lightNavy/30'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {aboutData?.title || 'About Me'}
            </h2>
            <div className={`w-24 h-1 mx-auto ${
              theme === 'light' ? 'bg-purple-600' : 'bg-accent'
            }`}></div>
          </div>
          
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`rounded-2xl p-8 md:p-12 shadow-lg ${
              theme === 'light'
                ? 'bg-white border border-gray-100'
                : 'bg-lightNavy/50 border border-lightestNavy/20'
            }`}
          >
            <div className="text-center space-y-4">
              {introLines.length > 0 ? (
                introLines.map((line, idx) => {
                  const parsed = parseMarkdown(line);
                  return (
                    <p
                      key={idx}
                      className={`text-lg md:text-xl leading-relaxed ${
                        theme === 'light' ? 'text-gray-900' : 'text-lightSlate'
                      }`}
                    >
                      {parsed.map((part, partIdx) => {
                        if (part.type === 'bold') {
                          return (
                            <strong key={partIdx} className={`font-semibold ${
                              theme === 'light' ? 'text-gray-900' : 'text-white'
                            }`}>
                              {part.content}
                            </strong>
                          );
                        } else if (part.type === 'link') {
                          return (
                            <a
                              key={partIdx}
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
                        } else {
                          return <span key={partIdx}>{part.content}</span>;
                        }
                      })}
                    </p>
                  );
                })
              ) : (
                <p className={`text-lg md:text-xl leading-relaxed ${
                  theme === 'light' ? 'text-gray-900' : 'text-lightSlate'
                }`}>
                  I am a <strong className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Master of Science in Mechanical Engineering (Research)</strong> student at{' '}
                  <a
                    href="https://www.ri.cmu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:underline ${
                      theme === 'light' ? 'text-purple-600 hover:text-purple-700' : 'text-accent hover:text-white'
                    }`}
                  >
                    Robotics Institute, Carnegie Mellon University
                  </a>.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
