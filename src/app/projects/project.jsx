"use client"
import React from 'react'
import style from '../about/about.module.css'

import { motion } from 'framer-motion'
import RandomeColor from '../rendomColor/randomColor'

const Projects = () => {
    const education = [
        {
            year: "Online Post App (Node.js)",
            degree: "A full-stack app to create, view, and manage posts with client-server architecture.",
            institution: "Post App",
            description: "To learn full-stack development with Node.js, Express, and MongoDB.",
            grade: "Jan 2025",
            live: "https://singh8700.github.io/postapp/"
        },
        {
            year: "CRUD Application",
            degree: "A full-stack application that allows users to create, read, update, and delete data with a simple interface.",
            institution: "Application",
            description: "To practice full-stack development, integrating frontend with React.js and backend with Node.js and MongoDB.",
            grade: "Dec 2024",
            live: "https://authapp-3d4v.onrender.com"
        },
        {
            year: "Mini Project Post Create",
            degree: "A simple task management app where users can create, edit, and delete their to-do notes.",
            institution: "Application",
            description: " To practice building a full-stack application with React.js for the frontend and Node.js for the backend.",
            grade: "Dec 2024",
            live: "https://mini-project-01.onrender.com/"
        },
        {
            year: "Web Games App",
            degree: "Predict dice rolls to earn points. 5 chances, correct gives +5, wrong gives -1 points.",
            institution: "Dice Game",
            description: "JS, ReactJs",
            grade: "Sep 2023",
            live: "https://singh8700.github.io/DiecsGame/"
        },
        {
            year: "Image Search App",
            degree: "Search and download live images with ease in this simple web app.",
            institution: " Images Search Web App",
            description: "ReactJs,Image API",
            grade: "Jul 2023",
            live:"https://singh8700.github.io/imgsearch/"
        },
        {
            year: "Weather App",
            degree: "Get real-time weather updates for any location using this easy-to-use web app.",
            institution: "Weather App",
            description: "To practice fetching data from APIs and working with React.js.",
            grade: "Jun 2023",
            live:"https://singh8700.github.io/weatherApps/"
        },
        {
            year: "Simple Note Management App",
            degree: "Manage, organize, and search your notes effortlessly with NoteMaster.",
            institution: "Notes App",
            description: "To provide an easy, fast, and organized way to manage notes efficiently.",
            grade: "May 2023",
            live:"https://singh8700.github.io/userListProject/"
        },
        {
            year: "Cards Effects On Mouse",
            degree: " Hover over cards to see interactive visual effects that respond to mouse movements.",
            institution: "Cards Effects On Mouse",
            description: "To practice CSS animations and JavaScript event handling for dynamic UI interactions.",
            grade: "Sep 2022",
            live:"https://singh8700.github.io/CardsEffects-/"
        }
    ]

    const certifications = [
        {
            year: "Poster's",
            title: "Photoshop Project",
            organization: "Client Template",
            credential: "FREE"
        },
        {
            year: "Logo's",
            title: "Corel & Photoshop",
            organization: "Student Projects Building",
            credential: "FREE"
        },
        {
            year: "Video's",
            title: "Social Media Marketing",
            organization: "Client & Advertiser",
            credential: "FREE"
        },
        {
            year: "FB, Insta, Google Ads",
            title: `Running the crypto ads on social media
                     differnt different platforms`, 
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
                    <RandomeColor content="My Journey"/>
                </h2>
                <p className={style.subtitle}>Projects</p>

                <div className={style.qualificationContainer}>
                    <div className={style.educationSection}>
                        <h3 style={{color:"#fff"}}>
                          <RandomeColor content="Live Projects"/>
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
                                        <div className={style.btn}>
                                        <a href={edu.live} target="_blank" rel="noopener noreferrer" className={style.grade}>Live</a>
                                        <span className={style.grade}>{edu.grade}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className={style.certificationSection}>
                        <h3>
                            <RandomeColor content="Projects"/>
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


export default Projects
