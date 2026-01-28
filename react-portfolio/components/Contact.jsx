import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const contactData = getSectionContent('contact');
  const { theme } = useTheme();

  const contactInfo = [
    {
      type: 'Email',
      value: contactData?.email || 'gopalakt@andrew.cmu.edu',
      href: `mailto:${contactData?.email || 'gopalakt@andrew.cmu.edu'}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'LinkedIn',
      value: 'Connect',
      href: 'https://www.linkedin.com/in/gopalakrishnan-thirunellai-venkitachalam',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" ref={ref} className={`py-20 transition-colors duration-300 ${
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
          }`}>{contactData?.title || 'Get In Touch'}</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            theme === 'light' ? 'bg-purple-600' : 'bg-accent'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-lightSlate'
          }`}>
            {contactData?.description || "I'm always interested in discussing new research opportunities, collaborations, and innovative projects in AI and robotics."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group cursor-pointer text-center rounded-lg border shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 hover:border-purple-500'
                    : 'bg-lightNavy border-lightestNavy hover:border-accent'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`transition-colors duration-200 ${
                    theme === 'light'
                      ? 'text-purple-600 group-hover:text-purple-700'
                      : 'text-accent group-hover:text-white'
                  }`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors duration-200 ${
                      theme === 'light'
                        ? 'text-gray-900 group-hover:text-purple-600'
                        : 'text-white group-hover:text-accent'
                    }`}>
                      {contact.type}
                    </h3>
                    <p className={`transition-colors duration-200 ${
                      theme === 'light'
                        ? 'text-gray-600 group-hover:text-gray-700'
                        : 'text-lightSlate group-hover:text-lightestSlate'
                    }`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={contactData?.primary_cta_link || "mailto:gopalakt@andrew.cmu.edu"}
              className={`text-lg px-8 py-4 rounded-md font-medium transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                  : 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-navy'
              }`}
            >
              {contactData?.primary_cta || "Send me an email"}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
