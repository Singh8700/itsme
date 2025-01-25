"use client"
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr"
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Portfolio</h3>
          <p>Building digital experiences with passion and precision.</p>
          <div className="social-links">
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

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>React Web Apps</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>Delhi, India</li>
            <li>rohit.si8700@gemail.com</li>
            <li>+91 8700750589</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>
            Made with <FaHeart className="heart" /> and <FaCode className="code" /> 
            <br />
            © {currentYear} rohit.singh8700. All rights reserved.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: var(--foreground);
  padding: 4rem;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(144, 238, 144, 0.3),
      transparent
    );
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-section {
  padding-bottom: 50px;
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(45deg, #90EE90, #32CD32);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    p {
      line-height: 1.6;
      opacity: 0.8;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;

      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(144, 238, 144, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--foreground);
        transition: all 0.3s ease;
        border: 1px solid rgba(144, 238, 144, 0.2);

        &:hover {
          background: rgba(144, 238, 144, 0.2);
          transform: translateY(-3px);
        }

        svg {
          font-size: 1.2rem;
        }
      }
    }
  }

  .footer-links {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
      opacity: 0.8;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
        transform: translateX(5px);
        color: #90EE90;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          color: #90EE90;
        }
      }
    }
  }

  .footer-bottom {
  // display: flex;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left:50%;
      transform: translateX(-50%);
      align-items: center;
      text-align: center;
    border-top: 1px solid rgba(144, 238, 144, 0.1);

    .copyright {
      opacity: 0.8;
      font-size: 0.9rem;
      line-height: 1.6;

      .heart, .code {
        color: #90EE90;
        display: inline-block;
        margin: 0 0.3rem;
        animation: pulse 1.5s ease infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem;
  .footer-section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 20px;
    }
    .footer-content {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
  }
    
`

export default Footer
