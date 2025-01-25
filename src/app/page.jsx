"use client"

import style from './main.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={style.heroContent}
        >
          <h1>Creative Developer</h1>
          <p>Turning Ideas into Digital Reality</p>
          <div className={style.ctaButtons}>
            <button className={style.primary}>View Projects</button>
            <button className={style.secondary}>Contact Me</button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}




