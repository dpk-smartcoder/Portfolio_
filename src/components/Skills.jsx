import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const skills = [
    { name: 'C++', icon: '🧩' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'TypeScript', icon: '🔵' },
    { name: 'Python', icon: '🐍' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'NLP', icon: '🧠' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Express', icon: '🚂' },
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-dark-light" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Favourite Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a glance over skills I have and what I can perform for your project
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-black border-2 border-primary/30 rounded-xl p-6 flex flex-col items-center justify-center space-y-3 cursor-pointer group hover:border-primary transition-all duration-300"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-white text-sm font-medium text-center group-hover:text-primary transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
