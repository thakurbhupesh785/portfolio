import React from 'react'
import {SOCIAL_MEDIA_LINKS} from '../constants'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='mb-0 mt-20'>
        <div className='flex items-center justify-center'>
            <motion.h1
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.5}}
              className='mb-20 font-bold text-3xl'>Bhupesh Kumar</motion.h1>
        </div>
        <div className='flex items-center justify-center gap-8 mb-10'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=> (
                <motion.a
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{duration:0.2,delay:index*0.5}}
                  key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </motion.a>
            ))}
        </div>
    </div>
  )
}

export default Footer