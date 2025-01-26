"use client"
import React from 'react'
import LogoSection from './logo'
import NavbarSection from './navbar'
import style from './logo.module.css'


const HeaderSection = () => {
  return (
    <div className={style.headerContainer}>
        <LogoSection/>
        <NavbarSection/>
    </div>
  )
}

export default HeaderSection