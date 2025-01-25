"use client"
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Qualification = () => {
    const education = [
        {
            year: "2017 - 2021",
            degree: "Bachelor of Arts (Programme)",
            institution: "Delhi University",
            description: "B.A Programme",
            grade: "1st Division"
        },
        {
            year: "2019 - 2020",
            degree: "Higher Secondary (12th)",
            institution: "G.S.B.V. D-Block Janak Puri",
            description: "Arts with Eco",
            grade: "74%"
        },
        {
            year: "2017 - 2018",
            degree: "Secondary School (10th)",
            institution: "G.S.B.V. D-Block Janak Puri",
            description: "General Studies",
            grade: "6.6 CGPE"
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
        <Wrapper>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>My Journey</h2>
                <p className="subtitle">Educational Background & Certifications</p>

                <div className="qualification-container">
                    <div className="education-section">
                        <h3>Education</h3>
                        <div className="timeline">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="year">{edu.year}</span>
                                        <h4>{edu.degree}</h4>
                                        <h5>{edu.institution}</h5>
                                        <p>{edu.description}</p>
                                        <span className="grade">{edu.grade}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="certification-section">
                        <h3>Certifications</h3>
                        <div className="cards">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="cert-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <span className="year">{cert.year}</span>
                                    <h4>{cert.title}</h4>
                                    <p>{cert.organization}</p>
                                    <span className="credential">ID: {cert.credential}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 2rem 2rem 100px 2rem;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--foreground);

    h2 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
        padding-top: 2rem;
        background: linear-gradient(45deg, #90EE90, #32CD32);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 3rem;
        opacity: 0.8;
    }

    .qualification-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-top: 2rem;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
        color: var(--foreground);
    }

    .timeline {
        position: relative;
        padding-left: 2rem;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 2px;
            background: linear-gradient(to bottom, #90EE90, #32CD32);
        }
    }

    .timeline-item {
        position: relative;
        padding-bottom: 2rem;

        .timeline-dot {
            position: absolute;
            left: -2.4rem;
            top: 0;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: #90EE90;
            border: 2px solid var(--background);
        }

        .timeline-content {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(144, 238, 144, 0.2);

            .year {
                display: inline-block;
                padding: 0.3rem 1rem;
                background: rgba(144, 238, 144, 0.1);
                border-radius: 20px;
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
            }

            h4 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
                color: #90EE90;
            }

            h5 {
                font-size: 1rem;
                margin-bottom: 0.5rem;
                opacity: 0.9;
            }

            p {
                font-size: 0.9rem;
                opacity: 0.8;
                margin-bottom: 0.5rem;
            }

            .grade {
                display: inline-block;
                padding: 0.2rem 0.8rem;
                background: rgba(144, 238, 144, 0.2);
                border-radius: 15px;
                font-size: 0.9rem;
            }
        }
    }

    .cards {
        display: grid;
        gap: 1.5rem;
    }

    .cert-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(144, 238, 144, 0.2);
        transition: all 0.3s ease;

        .year {
            display: inline-block;
            padding: 0.3rem 1rem;
            background: rgba(144, 238, 144, 0.1);
            border-radius: 20px;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: #90EE90;
        }

        p {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 0.5rem;
        }

        .credential {
            display: inline-block;
            padding: 0.2rem 0.8rem;
            background: rgba(144, 238, 144, 0.2);
            border-radius: 15px;
            font-size: 0.9rem;
        }
    }
`

export default Qualification
