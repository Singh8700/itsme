"use client";
import React, { useState, useEffect } from "react";
import style from "./logo.module.css";


const LogoSection = () => {
  const [scrolled, setScrolled] = useState(false);

 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      
  return (
    <div className={`${style.LogoContainer} ${scrolled ? style.scroll : ""}`}>
      <div className={style.logo}>
        <h2 style={{
          fontWeight: "bolder",
          fontFamily:"Georgia, 'Times New Roman', Times, serif",
          background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Hey Friend's!</h2>
      </div>
      <div className={style.subtitle}>Welcome to my portfolio</div>
    </div>
  );
};

export default LogoSection;
