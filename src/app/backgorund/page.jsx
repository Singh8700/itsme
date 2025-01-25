"use client"
import styled from 'styled-components'
import style from './background.module.css'

const BackgroundPics = () => {
  return (
    <BackgroundAnimation/>
  )
}

const BackgroundAnimation = () => (
    <div className={style.BackgroundContainer}>
      {[...Array(50)].map((_, i) => (
        <div key={i} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );

const BackgroundWrapper = styled.div`
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