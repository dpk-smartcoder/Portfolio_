import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Frontend Developer',
      icon: '</>',
      items: [
        'The visually appealing website\'s interface',
        'Interactive and dynamic elements to your web pages',
        'Animations and form validation to complex frontend functionality',
        'A wide range of JavaScript development tasks',
      ],
    },
    {
      title: 'Backend Developer',
      icon: '🛡️',
      items: [
        'Restful API',
        'Manage the backend using MongoDB',
        'I specialize in server-side programming language like NodeJs',
        'I can seamlessly integrate third-party services',
      ],
    },
    {
      title: 'Database Management',
      icon: '🗄️',
      items: [
        'Database management using MongoDB',
        'Collection of data in ease and systematic way',
        'Comprehensive database administration services, including monitoring, backups',
        'I prioritize data security',
      ],
    },
  ]

  return (
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">What I Do</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-black border-2 border-dashed border-primary/50 rounded-xl p-8 hover:border-primary transition-all duration-300 group"
            >
              <div className="text-5xl text-primary mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-primary text-sm mb-4 text-center">I can build</p>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 text-sm flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
