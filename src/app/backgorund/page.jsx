"use client"
import styled from 'styled-components'

const BackgroundPics = () => {
  return (
    <BackgroundAnimation/>
  )
}

const BackgroundAnimation = () => (
    <BackgroundWrapper>
      {[...Array(50)].map((_, i) => (
        <div key={i} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </BackgroundWrapper>
  );

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 99;
  
  .circle-container {
    position: absolute;
    transform: translateY(-10vh);
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    .circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.1);
      animation: circle-animation 25s infinite;
    }
  }

  ${[...Array(50)].map((_, i) => `
    .circle-container:nth-child(${i + 1}) {
      width: ${Math.random() * 20 + 10}px;
      height: ${Math.random() * 20 + 10}px;
      left: ${Math.random() * 100}vw;
      animation: move-${i + 1} ${Math.random() * 30 + 20}s infinite;
      animation-delay: -${Math.random() * 40}s;
    }

    @keyframes move-${i + 1} {
      100% {
        transform: translateY(110vh);
      }
    }
  `).join('')}

  @keyframes circle-animation {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: scale(0.5);
      opacity: 1;
    }
  }
`

export default BackgroundPics