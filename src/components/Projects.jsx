import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const projects = [
    {
      title: 'Dev_Code - A CSS Contest Platform',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'REST API', 'HTML/CSS'],
      link: 'https://github.com/dpk-smartcoder/Dev_Code',
    },
    {
      title: 'AI-Powered Smart Resume Analyzer',
      technologies: ['React.js', 'Python', 'JavaScript', 'Tailwind CSS', 'NLP', 'Flask'],
      link: 'https://github.com/dpk-smartcoder/Smart_Resume_Analyser ',
    },
    {
      title: 'Medi Agent System',
      technologies: ['LangChain', 'React.js', 'Python', 'Flask', 'Tailwind CSS', 'Agile', 'OpenAI'],
      link: 'https://github.com/dpk-smartcoder/MediAgent ',
    },
    {
      title: 'AlgoForge: AI Problem Solver',
      technologies: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'Docker', 'OpenAI', 'GeminiAPI'],
      link: 'https://github.com/dpk-smartcoder/AlgoForge',
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-dark-light" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary rounded-xl p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-dark/30 rounded-bl-full"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-dark/50 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-dark hover:bg-primary-dark/80 text-white px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3"
                >
                  Go to project
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
