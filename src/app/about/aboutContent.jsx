"use client"
import React from 'react'
import style from './about.module.css'
import { motion } from 'framer-motion'

import RandomeColor from '../rendomColor/randomColor'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import AnimatedText from '../utility/animatedText'

const AboutContent = (props) => {
  const pathname = usePathname();

  const aboutContent = "Hi, my name is Rohit. I completed my graduation in 2021. I have over two years of experience as a computer tutor at RIIT Computer Institute, where I helped students develop their technical skills. Additionally, I worked for nine months at Aggie Airport through Civil Defense, gaining hands-on experience in security and operations. I also have experience in tele-calling, which has enhanced my communication skills. While I am originally from Bihar, I completed my entire education in Delhi. I am highly dedicated to my work and always strive to perform my duties efficiently and honestly."
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
      skill: "Photoshop"
    },
    {
      skill: "Basic Python",
    },
    {
      skill: "MongoDB",
    }
  ]

  const truncateContent = (content, length) => {
    if (content.length > length) {
     return  content.slice(0, length) + '...' ; 
       if(content.length < length){
        return  pathname === "/about" ? null : (
          <Link className={style.readMore} href="/about">
            Read More..
          </Link>
        )
       } // Add ellipsis if content is too long
    }
    return content;
  };

 

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
              <RandomeColor content="About Me" />
            </h2>
            <div>
              <AnimatedText text={truncateContent(aboutContent, props.length)} tags="paragraph" />
            </div>
            {pathname === "/about" ? null : (
              <Link className={style.readMore} href="/about">
                Read More..
              </Link>
            )}
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