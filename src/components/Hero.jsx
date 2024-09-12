import React from 'react'
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:pl-8 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
         <div className='flex flex-col items-center lg:items-start'>
           <motion.h1 
           variants={container(0)}
           initial='hidden'
           animate='visible'
           className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl pt-20'>Bhupesh Kumar</motion.h1>
           <motion.span 
            variants={container(0.5)}
            initial='hidden'
            animate='visible'
            className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
            Frontend Web Developer
           </motion.span>
           <motion.p 
           variants={container(1)}
           initial='hidden'
           animate='visible'
           className='my-2 max-w-xl py-6 font-light tracking-tighter'>
           I am a passionate Front end developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and other technologies for web development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
           </motion.p>

           <motion.a
              href="https://drive.google.com/file/d/1rtMvqaQOn-Nh0zHbcWfpnjM6OWdkZZnj/view?usp=drivesdk" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition-colors"
              variants={container(1.4)}
              initial='hidden'
              animate='visible'
            >
              Download Resume
            </motion.a>

         </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
         <div className='flex justify-center'>
          <motion.img 
           initial={{x: 100, opacity:0}}
           animate={{x:0, opacity: 1}}
           transition={{duration:1, delay:1.2}}
           className='lg:pt-20 pt-15 lg:mt-20 ' 
           width={300}
           src='https://images.pexels.com/photos/28317591/pexels-photo-28317591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='profilePic'/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Hero