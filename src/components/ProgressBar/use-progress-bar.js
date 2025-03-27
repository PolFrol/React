import { useEffect, useState } from "react";

export const useProgressbar = () => {
    const [percent, setPersent] = useState(0);

    const handleScroll = () => {
      const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100; 
      setPersent(percent)
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);
    
    return percent;
}