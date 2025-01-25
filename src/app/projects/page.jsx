'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const projects = [
  {
    id: 1,
    title: "Project 2",
    description: "Description of project 1",
    image: "/project1.jpg",
    technologies: ["React", "Next.js", "Styled Components"],
    githubLink: "https://github.com/singh8700/project1",
    liveLink: "https://project1.demo",
    category: "web"
  },
  // Add more projects here
]

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #111827, #000000);
  color: white;
  padding: 5rem 1rem;
  animation: ${fadeIn} 0.5s ease-out;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #a78bfa, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  color: #9ca3af;
  margin-bottom: 3rem;
`

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
  background: ${props => props.active ? '#9333ea' : '#1f2937'};
  color: ${props => props.active ? 'white' : '#9ca3af'};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.active ? '#9333ea' : '#374151'};
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProjectCard = styled.div`
  background: #1f2937;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 12rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

const LinkButtons = styled.div`
  display: flex;
  gap: 1rem;
`

const IconButton = styled.a`
  padding: 0.5rem;
  background: white;
  border-radius: 9999px;
  color: black;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #9333ea;
    color: white;
    transform: translateY(-2px);
  }
`

const ProjectInfo = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white;
`

const ProjectDescription = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: #374151;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #d1d5db;
`

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const categories = ['all', 'web', 'mobile', 'other']

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <Container>
      <ContentWrapper>
        <Title>My Projects</Title>
        <Subtitle>Explore my latest works and personal projects</Subtitle>

        <CategoryFilter>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoryFilter>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ImageContainer>
                <img src={project.image} alt={project.title} />
                <Overlay>
                  <LinkButtons>
                    <IconButton
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} />
                    </IconButton>
                    <IconButton
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={20} />
                    </IconButton>
                  </LinkButtons>
                </Overlay>
              </ImageContainer>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </Container>
  )
}

export default ProjectsPage