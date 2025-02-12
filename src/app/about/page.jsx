"use client"
import React from 'react'
import style from './about.module.css'
// import RandomeColor from '../rendomColor/randomColor'
import AboutContent from './aboutContent'
import Qualification from './qualification'
import Footer from '../footer/footer'

const AboutPage = () => {
  return (
    <>
   <main className={style.main}>
      <AboutContent />
      <Qualification/>
   </main>
   <Footer/>
   </>
  )
}




export default AboutPage