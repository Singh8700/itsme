"use client";
import React, { useState, useEffect } from "react";
import style from "./logo.module.css";
import RandomeColor from "../rendomColor/randomColor";


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
        <h3 className={style.text}>
          Hey Friend's!
        </h3>
      </div>
      <div className={style.subtitle}>Welcome to my portfolio</div>
    </div>
  );
};

export default LogoSection;
