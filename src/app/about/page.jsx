"use client"
import React from 'react'
import style from './about.module.css'
import { motion } from 'framer-motion'
import Qualification from './qualification'
import RandomeColor from '../rendomColor/randomColor'
import Footer from '../footer/footer'

const AboutPage = () => {
  return (
    <>
   <main className={style.main}>
 
     <div className={style.aboutContainer}>
    
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={style.aboutContent}
        >
          <h2>
            <RandomeColor content="About Me"/>
          </h2>
          <p>I'm a passionate developer who loves creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.</p>
          <div className={style.skills}>
            <div className={style.span}>React</div>
            <div className={style.span}>Next.js</div>
            <div  className={style.span}>JavaScript</div>
            <div className={style.span}>Node.js</div>
          </div>
        </motion.div>
      </div>
      <Qualification />
   </main>
   <Footer/>
   </>
  )
}




export default AboutPage