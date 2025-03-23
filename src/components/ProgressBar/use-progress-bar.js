import { useState, useEffect, useRef } from "react";

export const useProgressbar = () => {
    const progressBarRef = useRef(null);
    const scrollPercentageRef = useRef(0);

    const handleScroll = () => {
      const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      scrollPercentageRef.current = percent;
      progressBarRef.current.style.width = `${percent}%`;
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    return progressBarRef;
}