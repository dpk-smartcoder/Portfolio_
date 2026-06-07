import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const certificates = [
    '/images/cert1.jpeg',
    '/images/cert2.jpeg',
    '/images/cert3.jpeg',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="certificates"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-dark-light"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications and credentials that validate my skills and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative aspect-[4/3] w-full border-2 border-primary/20 rounded-xl overflow-hidden hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-primary/10 bg-white"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-5 bg-white">
                <img
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-4 right-4 z-10 bg-primary/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award size={18} className="text-primary" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1] pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
