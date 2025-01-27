"use client"

import style from './main.module.css';
import { motion } from 'framer-motion';
import Background from './objects/Background';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="containers">

    <main className={style.main}>
    <Background/>
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
            <Link href="/projects">
            <button className={style.primary}>View Projects</button>
            </Link>
            <a href="/pdf/rohitpdf.pdf" download="resume.pdf" target='_blank'>
            <button className={style.secondary}>Download CV</button>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
    </div>
  );
}




