"use client"
import React, { useEffect, useState } from 'react';
import styles from "./nav.module.css";
import Link from 'next/link';
import {usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiTheodinproject } from "react-icons/si";
import { IoMdContact } from 'react-icons/io';




const NavbarSection = () => {
    
    const pathname = usePathname()
   const navText = [
    {title : "home", path : "/", icon: <AiFillHome/> },
    {title : "about", path : "/about", icon: <BsFillPersonFill/> },
    {title : "Projects", path : "/projects", icon: <SiTheodinproject/> },
    {title : "contact", path : "/contact", icon: <IoMdContact/> }
   ]

   

    return (
        <nav className={styles.navSection}>
            <ul>
                {navText.map((text, index) => (
                    <li key={index}>
                        <Link href={text.path}>
                            <span 
                            className={`
                            ${pathname === text.path ? styles.active : ""}
                        ${styles.icon}`}>{text.icon}</span>
                            <span 
                            className={`
                            ${pathname === text.path ? styles.textActive : ""}  
                        ${styles.text}`}>{text.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
    
}



export default NavbarSection