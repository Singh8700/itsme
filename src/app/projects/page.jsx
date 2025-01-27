import React from 'react'
import Background from '../objects/Background'
import Projects from './project'
import style from './projects.module.css'

const page = () => {
  return (
    <div className={style.container}>
      {/* <h1>Projects</h1> */}
      <Projects/>
    </div>
  )
}

export default page