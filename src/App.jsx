import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #4DD0E1',
          },
        }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
