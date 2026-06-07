import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import StarfieldBackground from './StarfieldBackground'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={ref}>
      <StarfieldBackground starCount={380} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-[10rem] sm:text-[12rem] md:text-[18rem]"
            >
              👨‍💻
            </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a self motivated person passionate of coding. I am a dynamic and innovative web developer 
              who thrive on transforming ideas into visually stunning and functional softwares.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a proactive approach and a keen eye for detail, I enjoy working closely with teams to deliver 
              exceptional results. My expertise spans across modern web technologies, and I'm always eager to 
              learn and implement the latest industry best practices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-6 py-3">
                <p className="text-primary font-semibold">3+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-6 py-3">
                <p className="text-primary font-semibold">Final Year</p>
                <p className="text-gray-400 text-sm">BTech Computer Engg.</p>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-6 py-3">
                <p className="text-primary font-semibold">10+</p>
                <p className="text-gray-400 text-sm">Technologies Used</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
