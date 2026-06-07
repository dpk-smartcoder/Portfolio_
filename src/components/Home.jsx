import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { Download, ArrowRight, Linkedin, Github } from 'lucide-react'
import StarfieldBackground from './StarfieldBackground'

const Home = () => {
  const sectionRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const cursorRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })

  useEffect(() => {
    if (!isInView) {
      if (titleRef.current) titleRef.current.textContent = ''
      return
    }

    const titles = ['MERN Developer', 'Programmer', 'Team Leader']
    let currentTitleIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let timeoutId = null
    let cancelled = false
    const TYPING_SPEED = 100

    const typeTitle = () => {
      if (cancelled || !titleRef.current) return

      const currentTitle = titles[currentTitleIndex]

      if (!isDeleting && currentCharIndex < currentTitle.length) {
        titleRef.current.textContent = currentTitle.substring(0, currentCharIndex + 1)
        currentCharIndex++
        timeoutId = setTimeout(typeTitle, TYPING_SPEED)
      } else if (!isDeleting && currentCharIndex === currentTitle.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true
          typeTitle()
        }, 2000)
      } else if (isDeleting && currentCharIndex > 0) {
        titleRef.current.textContent = currentTitle.substring(0, currentCharIndex - 1)
        currentCharIndex--
        timeoutId = setTimeout(typeTitle, TYPING_SPEED)
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentTitleIndex = (currentTitleIndex + 1) % titles.length
        timeoutId = setTimeout(typeTitle, 500)
      }
    }

    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })

    typeTitle()

    return () => {
      cancelled = true
      if (timeoutId) clearTimeout(timeoutId)
      gsap.killTweensOf(cursorRef.current)
    }
  }, [isInView])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <StarfieldBackground starCount={420} />
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
          style={{ position: 'relative' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-1"
            style={{ margin: 0, padding: 0 }}
          >
            Hello, I'm
          </motion.p>

          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl font-black leading-none mb-2"
            style={{ 
              fontWeight: '900',
              fontFamily: 'inherit',
              letterSpacing: '-0.02em',
              textShadow: '0 0 15px rgba(77, 208, 225, 0.3), 0 2px 8px rgba(77, 208, 225, 0.2)',
              color: '#4DD0E1',
              marginTop: 0,
              marginBottom: '0.5rem',
              marginLeft: 0,
              marginRight: 0,
              padding: 0,
              display: 'block',
              position: 'relative',
              zIndex: 1
            }}
          >
            Deepak
          </h1>

          <div 
            className="flex items-center space-x-2 mt-2" 
            style={{ 
              marginTop: '0.5rem',
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              padding: 0,
              position: 'relative',
              zIndex: 1
            }}
          >
            <h2
              ref={titleRef}
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ margin: 0, padding: 0, display: 'inline-block' }}
            ></h2>
            <span
              ref={cursorRef}
              className="text-3xl md:text-5xl text-primary"
              style={{ margin: 0, padding: 0, display: 'inline-block' }}
            >
              |
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg max-w-lg mt-6"
          >
            With the knowledge in software development, I offer the best projects resulting in quality work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1Keu-lef1lkoc1zwcRoEaOdYG4oxyT9K8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('#about')}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              About Me
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 pt-4"
          >
            <a
              href="https://www.linkedin.com/in/dbestdeepak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/dpk-smartcoder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 1,
              ease: 'easeInOut',
            }}
            className="relative w-full max-w-md md:max-w-lg flex justify-center items-center"
          >
            <div className="relative w-full h-auto flex justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                <img
                  src="/images/Deepak.jpeg"
                  alt="Deepak - Developer"
                  className="w-full h-full object-contain scale-110"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(77, 208, 225, 0.4))' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
