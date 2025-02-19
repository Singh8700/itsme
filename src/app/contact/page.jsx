"use client"
import React from 'react'
import style from './contact.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr"
import RandomeColor from '../rendomColor/randomColor'
import Footer from '../footer/footer'
import VisitingCard from '../visitingCards/visitingCard'

const ContactPage = () => {
  return (
    <>
    <div className={style.Warrper}>
      <h1>Get in Touch</h1>
      <p className={style.subtitle}>Let's connect and create something amazing together!</p>
      
      <div className={style.contactGrid}>
        <div className={style.contactInfo}>
          <h2>
            <RandomeColor content="Contact Information"/>
          </h2>
          <div className={style.infoItem}>
            <FaMapMarkerAlt />
            <span>Delhi, India</span>
          </div>
          <div className={style.infoItem}>
            <FaMailBulk />
            <a href="mailto:rohit.si8700@gemail.com">rohit.si8700@gemail.com</a>
          </div>
          <div className={style.infoItem}>
            <FaPhone />
            <a href="tel:+918700750589">+91 8700750589</a>
          </div>

          <div className={style.socialLinks}>
            <a href="https://github.com/Singh8700" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://bit.ly/rohit-port" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/singh87_singh" target="_blank" rel="noopener noreferrer">
              <GrInstagram />
            </a>
          </div>
        </div>

        {/* <div className={style.contactForm}>
          <h2>Send Me a Message</h2>
          <form>
            <div className={style.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={style.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={style.formGroup}>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className={style.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button className={style.button} type="submit">Send Message</button>
          </form>
        </div> */}
      </div>
    </div>
    <VisitingCard positionType="left"/>
    <VisitingCard positionType="right"/>
    <Footer/>
    </>
  )
}

export default ContactPage
