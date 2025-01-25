"use client"
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Qualification from './qualification'

const AboutPage = () => {
  return (
   <Wrapper>
     <AboutSection>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.</p>
          <div className="skills">
            <Skill>React</Skill>
            <Skill>Next.js</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Node.js</Skill>
          </div>
        </motion.div>
      </AboutSection>
      <Qualification />
   </Wrapper>
  )
}

const Wrapper = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--background);
  color: var(--foreground);
  padding-bottom: 100px;
`;

const AboutSection = styled.section`
  width: 85vw;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 4rem 0;
  margin: 0 auto;
  margin-top: 2rem;

  .about-content {
    max-width: 800px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(45deg, #90EE90, #32CD32);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 2rem;
      color: var(--foreground);
      opacity: 0.9;
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const Skill = styled.span`
  padding: 0.5rem 1.5rem;
  background: rgba(144, 238, 144, 0.1);
  border: 1px solid #90EE90;
  border-radius: 50px;
  color: var(--foreground);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(144, 238, 144, 0.2);
    transform: translateY(-2px);
  }
`;

export default AboutPage