import React, { useState } from "react";
import { gsap } from "gsap";
import "./DayNightTransition.css";

const DayNightTransition = () => {
  const [isDay, setIsDay] = useState(false);

  const startTransition = () => {
    if (!isDay) {
      // Transition from night to day
      gsap.to(".moon", {
        duration: 3,
        y: 1000,
        x: -300,
        opacity: 0,
        ease: "power1.inOut",
      });

      gsap.to(".background", {
        duration: 5,
        background: "linear-gradient(to bottom, #87CEEB, #FFEBCD)",
        ease: "power2.inOut",
      });

      gsap.to(".sun", {
        duration: 5,
        y: -800,
        x: 570,
        opacity: 1,
        ease: "power2.inOut",
      });
    } else {
      // Transition from day to night
      gsap.to(".sun", {
        duration: 3,
        y: 100,
        x: -300,
        opacity: 0,
        ease: "power1.inOut",
      });

      gsap.to(".background", {
        duration: 5,
        background: "linear-gradient(to bottom, #00131b, #000)",
        ease: "power2.inOut",
      });

      gsap.to(".moon", {
        duration: 5,
        y: -20,
        x: 90,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
    setIsDay(!isDay);
  };

  return (
    <div className="background" onClick={startTransition}>
      <div className="moon"></div>
      <div className="sun"></div>
    </div>
  );
};

export default DayNightTransition;
