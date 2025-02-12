"use client"
import React from 'react'
import style from './animated.module.css'
import { motion } from 'framer-motion'



const AnimatedText = (props) => {
    const tags = props.tags
    const text = props.text
    const animatedText = text.split('')

  return (
    <>
    <div className={style.containers}>
        <span className={`${style[tags]}`}>
    {animatedText.map((letter, index) => (
                  <motion.span
                    key={index}
                    className={style.motionWord}
                    initial={{ opacity: 0, y:-20}}
                    whileInView={{ opacity: 1,y:0}}
                    exit={{opacity: 0, y:-20}}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {(letter === ' ')?<span>&nbsp;</span>:letter}
                  </motion.span>
                ))}
                </span>
    </div>
    </>
  )
}

export default AnimatedText