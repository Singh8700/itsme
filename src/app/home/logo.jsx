"use client"
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LogoSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LogoContainer $scrolled={scrolled}>
      <Title>Hey Friend!</Title>
      <Subtitle>Welcome to my portfolio</Subtitle>
    </LogoContainer>
  )
}

export default LogoSection

const LogoContainer = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:fixed;
top:0;
left:0;
z-index:100;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-radius: ${props => props.$scrolled ? '0 0 20px 20px' : '0'};
  box-shadow: ${props => props.$scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(144, 238, 144, 0.1)' : 'none'};
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(to right, #90EE90, #50C878);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled.small`
  display: block;
  color: #666;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`
