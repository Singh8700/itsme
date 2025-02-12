"use client"

import style from './main.module.css';
import { motion } from 'framer-motion';
import Background from './objects/Background';
import Link from 'next/link';
import Footer from './footer/footer';
import AboutContent from './about/aboutContent';
import ClientPage from './client/clientPage';

export default function Home() {
  const randNumber = Math.floor(Math.random() * 3);

  const text = "Creative Developer";
  const letters = text.split("");

  return (
    <>
      <div className="containers">
        <main className={style.main}>
          <Background />
          <motion.div
            className={style.overlay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span></span>
            <img src={randNumber == 0 ? './imgs/pic03.png' : './imgs/pic02.png'} alt="itsme" />
          </motion.div>
          <div className={style.wrapper}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={style.heroContent}
            >
              <h1>
                {letters.map((letter, index) => (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {letter}
                  </motion.h1>
                ))}
              </h1>
              <p>Turning Ideas into Digital Reality</p>
              <div className={style.ctaButtons}>
                <Link href="/projects">
                  <button className={style.primary}>View Projects</button>
                </Link>
                <a href="https://drive.google.com/file/d/1kN0TkCbbTMIHHtxN4ccRSR95TaKBN6Gq/view?usp=drive_link" download="resume.pdf">
                  <button className={style.secondary}>Download CV</button>
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      <AboutContent />
      <ClientPage/>
      <Footer />
    </>
  );
}