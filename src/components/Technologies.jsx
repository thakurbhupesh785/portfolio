import React from 'react'
import { FaReact, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    },
  }
})

function Technologies() {
  return (
    <section id='skills'>
      <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className=' my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className='text-7xl text-orange-600' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3Alt className='text-7xl text-blue-600' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(4.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJsSquare className='text-7xl text-yellow-500' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-7xl text-cyan-400' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(4.5)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTailwindcss className='text-7xl text-teal-500' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-500' /> 
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className='text-7xl text-gray-800' /> 
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies;
