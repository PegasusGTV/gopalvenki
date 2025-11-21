import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { getSectionContent } from '../lib/markdown';

const AboutSection = () => {
  const [ref, isInView] = useInView({ once: true, margin: "-100px" });
  const aboutData = getSectionContent('about');

  return (
    <section id="about" ref={ref} className="py-20 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-title">{aboutData?.title || 'About Me'}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg text-lightSlate leading-relaxed">
            {aboutData?.content ? (
              <div dangerouslySetInnerHTML={{ __html: aboutData.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
            ) : (
              <>
                <p>
                  Hello! I'm Gopalakrishnan Thirunellai Venkitachalam (Gopal), a Master's student in AI & Robotics Research, 
                  Mechanical Engineering at Carnegie Mellon University. I'm currently working as a Graduate Research Assistant 
                  at the Search Based Planning Lab, Robotics Institute, under the guidance of Prof. Maxim Likhachev.
                </p>
                <p>
                  My research focuses on developing efficient motion planning algorithms for robotics applications, with 
                  particular emphasis on real-time planning for mobile manipulators and multi-agent systems.
                </p>
                <p>
                  Previously, I was a Research Intern in ML, Control, and Data Analytics at Caterpillar Inc., where I 
                  developed MATLAB and Simulink models for predicting diesel engine exhaust gas temperature dynamics.
                </p>
                <p>
                  I hold a B.Tech in Mechanical Engineering with Honors from IIT Madras, with a Minor in Artificial Intelligence 
                  and Machine Learning, achieving a GPA of 8.71/10.0.
                </p>
              </>
            )}
          </div>

          {/* Research Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.0</div>
              <div className="text-lightSlate">GPA at CMU</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <div className="text-lightSlate">Years Research Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1+</div>
              <div className="text-lightSlate">Year Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
