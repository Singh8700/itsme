"use client"
import React from 'react'
import LogoSection from './logo'
import NavbarSection from './navbar'
import styled from 'styled-components'

const Wrapper = styled.header`
    width: 100%;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderSection = () => {
  return (
    <Wrapper>
        <LogoSection/>
        <NavbarSection/>
    </Wrapper>
  )
}

export default HeaderSection