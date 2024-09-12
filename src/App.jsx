import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial- 
         gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
      </div>
      
      <div className='container mx-auto px-0'>
       <Navbar/>
       <Hero/>
       <About/>
       <Technologies/>
       <Projects/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
