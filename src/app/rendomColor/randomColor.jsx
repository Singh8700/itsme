"use client"
import React from 'react'

const RandomeColor = (props) => {
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

  return (
    <div
        style={{
          fontWeight: "bolder",
          fontFamily:"Georgia, 'Times New Roman', Times, serif",
          background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {props.content}
      </div>
  )
}

export default RandomeColor