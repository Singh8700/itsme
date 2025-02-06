"use client";
import React, { useState } from "react";
import style from "./projects.module.css";
import RandomeColor from "../rendomColor/randomColor";
import { motion } from "framer-motion";

const Qualification = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  // Ensure window is only accessed on client-side
  
    

  // Function to truncate text based on screen width
  const truncateContent = (content, length) => {
     if (content.length > length) {
      return content.slice(0, length) + "..."; // Add ellipsis if content is too long
    }
    return content;
  };

    const education = [
        {
            year: "Online Post App (Node.js)",
            degree: "A full-stack app to create, view, and manage posts with client-server architecture.",
            institution: "Post App",
            description: "To learn full-stack development with Node.js, Express, and MongoDB.",
            grade: "Jan 2025",
            live: "https://singh8700.github.io/postapp/",
            models: "./imgs/pic01.png"
        },
        {
            year: "CRUD Application",
            degree: "A full-stack application that allows users to create, read, update, and delete data with a simple interface.",
            institution: "Application",
            description: "To practice full-stack development, integrating frontend with React.js and backend with Node.js and MongoDB.",
            grade: "Dec 2024",
            live: "https://authapp-3d4v.onrender.com",
            models: "./imgs/pic03.png"
        },
        {
            year: "Mini Project Post Create",
            degree: "A simple task management app where users can create, edit, and delete their to-do notes.",
            institution: "Application",
            description: " To practice building a full-stack application with React.js for the frontend and Node.js for the backend.",
            grade: "Dec 2024",
            live: "https://mini-project-01.onrender.com/",
            models: "./imgs/pic02.png"
        },
        {
            year: "Web Games App",
            degree: "Predict dice rolls to earn points. 5 chances, correct gives +5, wrong gives -1 points.",
            institution: "Dice Game",
            description: "Predict dice rolls to earn points. 5 chances, correct gives +5, wrong gives -1 points.",
            grade: "Sep 2023",
            live: "https://singh8700.github.io/DiecsGame/"
        },
        {
            year: "Image Search App",
            degree: "Search and download live images with ease in this simple web app.",
            institution: " Images Search Web App",
            description: "Search and download live images with ease in this simple web app.",
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
                  {edu.models && (
                    <motion.div className={`${style.model} ${index === 2 ? style.third : ""} ${index === 0 ? style.first : ""}`}
                      initial={{ opacity: 0, y: -20, scale: 0 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span></span>
                      <img src={edu.models} alt={edu.degree} />
                    </motion.div>
                  )}
                    <span className={style.year}>{edu.year}</span>
                    <h4>{truncateContent(edu.degree,50)}</h4>
                    <h5>{edu.institution}</h5>
                    <p>{edu.description}</p>
                    <span className={style.grade}>{edu.grade}</span>
                  </div>
                  
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