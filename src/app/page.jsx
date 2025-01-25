"use client"
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Wrapper>
      <HeroSection>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Creative Developer</h1>
          <p>Turning Ideas into Digital Reality</p>
          <div className="cta-buttons">
            <button className="primary">View Projects</button>
            <button className="secondary">Contact Me</button>
          </div>
        </motion.div>
      </HeroSection>
    </Wrapper>
  );
}


const Wrapper = styled.main`
width:100vw;
height:100vh;
  overflow: hidden;
  position: relative;
  background: var(--background);
  color: var(--foreground);
`;

const HeroSection = styled.section`
  width:100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;

  .hero-content {
    max-width: 800px;
    padding: 0 20px;

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #90EE90, #32CD32);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--foreground);
      opacity: 0.8;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;

      button {
        padding: 0.8rem 2rem;
        border-radius: 50px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;

        &.primary {
          background: linear-gradient(45deg, #90EE90, #32CD32);
          color: black;
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(50, 205, 50, 0.3);
          }
        }

        &.secondary {
          background: transparent;
          border: 2px solid #90EE90;
          color: var(--foreground);
          &:hover {
            background: rgba(144, 238, 144, 0.1);
            transform: translateY(-3px);
          }
        }
      }
    }
  }
`;


