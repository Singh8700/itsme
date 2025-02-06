
"use client"
import React from 'react'
import style from './about.module.css'
import RandomeColor from '../rendomColor/randomColor'
import { motion } from 'framer-motion'

const Qualification = () => {
  const education = [
    {
      year: "2017 - 2021",
      degree: "Bachelor of Arts (Programme)",
      institution: "Delhi University",
      description: "B.A Programme",
      grade: "1st Division",
      models: "./imgs/pic01.png"
    },
    {
      year: "2019 - 2020",
      degree: "Senior Secondary School (12th)",
      institution: "G.S.B.V. D-Block Janak Puri",
      description: "Arts with Eco",
      grade: "74%",
      models: "./imgs/pic02.png"
    },
    {
      year: "2017 - 2018",
      degree: "Secondary School (10th)",
      institution: "G.S.B.V. D-Block Janak Puri",
      description: "General Studies",
      grade: "6.6 CGPE",
      models: "./imgs/pic03.png"
    }
  ]

  const certifications = [
    {
      year: "2017",
      title: "Advance Computer Course",
      organization: "RIIT INFOTECH PVT LTD",
      credential: "RIIT/666"
    },
    {
      year: "2017 - 18",
      title: "Web Design, Corel, Photoshop, TallyPrime",
      organization: "RIIT INFOTECH",
      credential: "RIIT/666"
    },
    {
      year: "2019",
      title: "Web Development (coding + hosting )",
      organization: "LEARN VEARN",
      credential: "FREE"
    },
    {
      year: "2019 - 2020",
      title: "Web Development (REACT JS Libraray to emprove)",
      organization: "LEARN VEARN",
      credential: "FREE"
    }
  ]

  return (
    <div className={style.qualificationContainers}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          <RandomeColor content="My Journey" />
        </h2>
        <p className={style.subtitle}>
          <RandomeColor content="Educational" />
        </p>
    <div className={style.contentSection}>
    <div className={style.qualificationContainer}>
          <div className={style.educationSection}>
            <h3>
              <RandomeColor content="Education" />
            </h3>
            <div className={style.timeline}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className={style.timelineItem}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={style.timelineDot}></div>
                  <div className={style.timelineContent}>
                    <span className={style.year}>{edu.year}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.description}</p>
                    <span className={style.grade}>{edu.grade}</span>
                  </div>
                  <motion.div className={`${style.model} ${index === 2 ? style.third : ""}`}
                    initial={{ opacity: 0, y: -20, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span></span>
                    <img src={edu.models} alt={edu.degree} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
    </div>

    <div className={style.certificationSection}>
            <h3>
              <RandomeColor content="Certifications" />
            </h3>
            <div className={style.cards}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={style.certCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <span className={style.year}>{cert.year}</span>
                  <h4 className={style.title}>{cert.title}</h4>
                  <p>{cert.organization}</p>
                  <span className={style.credential}>ID: {cert.credential}</span>
                </motion.div>
              ))}
            </div>
    </div>
      </div>
      </motion.div>

      
    </div>
  )
}


export default Qualification