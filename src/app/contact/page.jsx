"use client"
import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { GrInstagram } from "react-icons/gr"

const ContactPage = () => {
  return (
    <Wrapper>
      <h1>Get in Touch</h1>
      <p className="subtitle">Let's connect and create something amazing together!</p>
      
      <ContactGrid>
        <ContactInfo>
          <h2>Contact Information</h2>
          <InfoItem>
            <FaMapMarkerAlt />
            <span>Delhi, India</span>
          </InfoItem>
          <InfoItem>
            <FaMailBulk />
            <a href="mailto:rohit.si8700@gemail.com">rohit.si8700@gemail.com</a>
          </InfoItem>
          <InfoItem>
            <FaPhone />
            <a href="tel:+918700750589">+91 8700750589</a>
          </InfoItem>

          <SocialLinks>
            <a href="https://github.com/Singh8700" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://bit.ly/rohit-port" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/singh87_singh" target="_blank" rel="noopener noreferrer">
              <GrInstagram />
            </a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm>
          <h2>Send Me a Message</h2>
          <form>
            <FormGroup>
              <input type="text" placeholder="Your Name" required />
            </FormGroup>
            <FormGroup>
              <input type="email" placeholder="Your Email" required />
            </FormGroup>
            <FormGroup>
              <input type="text" placeholder="Subject" required />
            </FormGroup>
            <FormGroup>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </FormGroup>
            <Button type="submit">Send Message</Button>
          </form>
        </ContactForm>
      </ContactGrid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #90EE90, #50C878);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(144, 238, 144, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--foreground);

  svg {
    margin-right: 1rem;
    font-size: 1.2rem;
    color: #90EE90;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #90EE90;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: var(--foreground);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #90EE90;
    }
  }
`

const ContactForm = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(144, 238, 144, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(144, 238, 144, 0.1);
    border-radius: 5px;
    color: var(--foreground);
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #90EE90;
      box-shadow: 0 0 0 2px rgba(144, 238, 144, 0.2);
    }

    &::placeholder {
      color: #666;
    }
  }

  textarea {
    resize: vertical;
  }
`

const Button = styled.button`
  background: linear-gradient(to right, #90EE90, #50C878);
  color: #000;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(144, 238, 144, 0.3);
  }
`

export default ContactPage
