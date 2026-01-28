import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroData, setHeroData] = useState(null);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const router = useRouter();
  const basePath = router.basePath || '/gopalvenki';
  const { theme } = useTheme();

  const greetings = [
    { text: "Hi! I'm", lang: "English" },
    { text: "Привет! I'm", lang: "Russian" },
    { text: "Hola! I'm", lang: "Spanish" },
    { text: "Bonjour! I'm", lang: "French" },
    { text: "Hallo! I'm", lang: "German" },
    { text: "Ciao! I'm", lang: "Italian" },
    { text: "こんにちは! I'm", lang: "Japanese" },
    { text: "你好! I'm", lang: "Chinese" },
    { text: "नमस्ते! I'm", lang: "Hindi" },
    { text: "안녕하세요! I'm", lang: "Korean" },
    { text: "مرحبا! I'm", lang: "Arabic" },
    { text: "Olá! I'm", lang: "Portuguese" },
    { text: "Hej! I'm", lang: "Swedish" },
    { text: "Γεια! I'm", lang: "Greek" },
    { text: "Merhaba! I'm", lang: "Turkish" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const data = getSectionContent('hero');
    setHeroData(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // Change greeting every 2 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-navy'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting - Multiple Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-8 md:h-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentGreetingIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={`text-lg md:text-xl font-medium ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`}
              >
                {greetings[currentGreetingIndex].text}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 shadow-xl ${
              theme === 'light' ? 'border-purple-500' : 'border-purple-400'
            }`}
          >
            {heroData?.profile_image ? (
              <img
                src={`${basePath === '/' ? '' : basePath}/${heroData.profile_image}`}
                alt={heroData?.name || 'Profile'}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">${heroData?.profile_initials || 'GV'}</div>`;
                  }
                }}
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br flex items-center justify-center text-4xl font-bold ${
                theme === 'light' 
                  ? 'from-purple-500 to-purple-600 text-white' 
                  : 'from-purple-400 to-purple-500 text-white'
              }`}>
                {heroData?.profile_initials || 'GV'}
              </div>
            )}
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {heroData?.name || 'Gopalakrishnan Thirunellai Venkitachalam'}
            </h1>
          </motion.div>

          {/* Social Links - Rectangular Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            {heroData?.scholar && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={heroData.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
                  theme === 'light'
                    ? 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
                    : 'bg-lightNavy text-lightestSlate hover:bg-lightestNavy border border-lightestNavy'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
                <span>Google Scholar</span>
              </motion.a>
            )}

            {heroData?.github && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
                  theme === 'light'
                    ? 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
                    : 'bg-lightNavy text-lightestSlate hover:bg-lightestNavy border border-lightestNavy'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </motion.a>
            )}

            {heroData?.linkedin && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
                  theme === 'light'
                    ? 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
                    : 'bg-lightNavy text-lightestSlate hover:bg-lightestNavy border border-lightestNavy'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </motion.a>
            )}

            {heroData?.resume && (
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`${basePath === '/' ? '' : basePath}/${heroData.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
                  theme === 'light'
                    ? 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
                    : 'bg-lightNavy text-lightestSlate hover:bg-lightestNavy border border-lightestNavy'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume</span>
              </motion.a>
            )}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ y: -5 }}
              onClick={scrollToAbout}
              className={`transition-colors duration-200 ${
                theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
