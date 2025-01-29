"use client"
import style from "./footer.module.css"
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr"
import Link from 'next/link'
import RandomeColor from "../rendomColor/randomColor"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={style.footerContainer}>
      <div className={style.footerContent}>
        <div className={style.footerSection}>
          <h3><RandomeColor content="Portfolio"/></h3>
          <p>Building digital experiences with passion and precision.</p>
          <div className={style.socialLinks}>
            <a href="https://github.com/Singh8700" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://bit.ly/rohit-port" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp  />
            </a>
            <a href="https://instagram.com/singh87_singh" target="_blank" rel="noopener noreferrer">
              <GrInstagram />
            </a>
            <a href="mailto:rohit.si8700@gemail.com" target="_blank" rel="noopener noreferrer">
              <FaMailBulk />
            </a>
          </div>
        </div>

        <div className={style.footerSection}>
          <h3>
          <RandomeColor content="Quick Links"/>
          </h3>
          <ul className={style.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={style.footerSection}>
          <h3>
          <RandomeColor content="Services"/>
          </h3>
          <ul className={style.footerLinks}>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>React Web Apps</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className={style.footerSection}>
          <h3>
          <RandomeColor content="Contact Info"/>
          </h3>
          <ul className={`${style.footerLinks} ${style.bottomLinks}`}>
            <li>Delhi, India</li>
            <Link href="mailto:rohit.si8700@gemail.com"> 
              <li>rohit.si8700@gemail.com</li>
           </Link>
           <Link href="https://bit.ly/rohit-port"> 
              <li>+91 8700750589</li>
           </Link>
          </ul>
        </div>
      </div>

      <div className={style.footerBottom}>
        <div className={`${style.copyright}`}>
          <p>
            Made with <FaHeart className={style.heart} /> and <FaCode className={style.code} /> 
            <br />
            © {currentYear} rohit.singh8700. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
