"use client"
import React from 'react'
import style from './about.module.css'
import { motion } from 'framer-motion'

import RandomeColor from '../rendomColor/randomColor'


const AboutContent = () => {
  const skills = [
    {
      skill: "Tally ERP9",
    },
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "React",
    },
    {
      skill: "Node.js",
    },
    {
      skill: "Corel Draw",
    },
    {
      skill:"Photoshop"
    },
    {
      skill: "Basic Python",
    },
    {
      skill: "MongoDB",
    }
  ]
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
          <p>
          Hi, my name is Rohit. I completed my graduation in 2021. I have over two years of experience as a computer tutor at RIIT Computer Institute, where I helped students develop their technical skills. Additionally, I worked for nine months at Aggie Airport through Civil Defense, gaining hands-on experience in security and operations. I also have experience in tele-calling, which has enhanced my communication skills. While I am originally from Bihar, I completed my entire education in Delhi. I am highly dedicated to my work and always strive to perform my duties efficiently and honestly.
          </p>
          <div className={style.skills}>
            {skills.map((skill, index) => (
              <div key={index} className={style.span}>
                <span>{skill.skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
   </main>
   </>
  )
}




export default AboutContent