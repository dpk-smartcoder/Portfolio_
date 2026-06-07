import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const experiences = [
    {
      role: 'Software Developer',
      company: 'Trigya Innovations India Pvt. Ltd.',
      period: 'Feb 2026 - Present',
      location: 'India',
      type: 'Internship',
      description:
        'Currently contributing to backend development at Trigya Innovations, building scalable server-side solutions using Zoho Catalyst. Experienced in developing secure RESTful APIs, managing data models, and implementing business logic using Node.js and Express.js.',
      highlights: [
        'Project: Kenstar SF Distributor',
        'Working on the backend architecture and API development.',
        'Developed user and role management modules along with secure jwt authentication.',
        'Designed a scalable bulk data import system capable of handling large records dynamically, DAI.',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional roles, contributions, and growth
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-3.5 md:left-5 top-6 w-5 h-5 rounded-full bg-primary border-4 border-black shadow-[0_0_12px_rgba(77,208,225,0.6)] z-10"></div>

                <motion.div
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="group bg-black border-2 border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="hidden sm:flex p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <Briefcase size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold mt-1">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-5">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
