import React from 'react'
import Background from '../objects/Background'
import Projects from './project'
import style from './projects.module.css'
import Footer from '../footer/footer'

const page = () => {
  return (
    <>
      {/* <h1>Projects</h1> */}
      <Projects/>
    <Footer/>
    </>
  )
}

export default page