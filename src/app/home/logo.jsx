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
  
      
  return (
    <div className={`${style.LogoContainer} ${scrolled ? style.scroll : ""}`}>
      <div className={style.logo}>
<<<<<<< HEAD
        <h3 className={style.text}>
          Hey Friend's!
        </h3>
=======
        <h2 style={{
          fontWeight: "bolder",
          fontFamily:"Georgia, 'Times New Roman', Times, serif",
          background: `linear-gradient(to right, #ef99af,#af0fcf )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Hey Friend's!</h2>
>>>>>>> 44ca961d3412f6fad8944337f9312af2d62aa290
      </div>
      <div className={style.subtitle}>Welcome to my portfolio</div>
    </div>
  );
};

export default LogoSection;
