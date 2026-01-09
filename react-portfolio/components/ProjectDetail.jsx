import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { getContentBySlug } from '../lib/markdown';

const ProjectDetail = ({ project }) => {
  const router = useRouter();
  const basePath = router.basePath || '';

  if (!project) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <a 
            href="/#projects"
            className="text-accent hover:text-white transition-colors duration-200"
          >
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a 
            href="/#projects"
            className="inline-flex items-center text-accent hover:text-white transition-colors duration-200 group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </a>
        </motion.div>

        {/* Project Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-96 bg-lightNavy/50 rounded-lg overflow-hidden">
              <img
                src={`${basePath === '/' ? '' : basePath}/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {project.title}
        </motion.h1>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="text-lightSlate leading-relaxed space-y-6">
            {project.content.split('\n\n').map((para, idx) => {
              if (!para.trim()) return null;
              
              // Check if paragraph starts with bold text (like "**Motivation:**")
              const boldMatch = para.match(/^\*\*(.*?):\*\*/);
              if (boldMatch) {
                const boldText = boldMatch[1];
                const restText = para.replace(/^\*\*.*?:\*\*\s*/, '');
                return (
                  <div key={idx} className="mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-3">{boldText}</h3>
                    <p className="text-lg text-lightestSlate leading-relaxed">{restText}</p>
                  </div>
                );
              }
              
              // Regular paragraph with potential bold text
              const parts = para.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={idx} className="text-lg text-lightestSlate leading-relaxed mb-4">
                  {parts.map((part, partIdx) => {
                    if (part.match(/\*\*(.*?)\*\*/)) {
                      return <strong key={partIdx} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return <span key={partIdx}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>
        </motion.div>

        {/* External Links */}
        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-lightNavy"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-white transition-colors duration-200 group"
            >
              <span className="mr-2">View Project</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

