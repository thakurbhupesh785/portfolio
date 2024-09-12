import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
   <section id='about'>
     <div className='border-b border-neutral-900 pb-4 flex items-center justify-center min-h-screen'>
      <div className='text-center max-w-4xl px-4'>
        <h1 className='my-20 text-4xl'>
          About&nbsp;
          <span className='text-neutral-500'>Me</span>
        </h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x: 100}}
        transition={{duration:0.5}}
        >
          <p className='my-2 text-lg'>
          👋 Hi, I’m Bhupesh, a 3rd-year B.Tech student at NIT Hamirpur with a passion for front-end web development. I love creating interactive and user-friendly web experiences using HTML, CSS, JavaScriptand React , and I'm constantly learning new technologies to enhance my skills. When I'm not coding, you can find me playing badminton or gaming. I'm currently seeking internship opportunities in front-end development to apply my skills in real-world projects and grow as a developer.
          </p>
        </motion.div>
      </div>
    </div>
   </section>
  )
}

export default About
