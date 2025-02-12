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
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
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