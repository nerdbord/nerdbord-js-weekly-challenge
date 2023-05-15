import React, { useState, useEffect } from "react";
import css from "./Stars.module.css";

export const Stars = ({ rows, columns }) => {
  const [stars, setStars] = useState(Array(rows * columns).fill(false));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const starElements = document.querySelectorAll(`.${css.star}`);
    let startTime = Date.now();
    
    starElements.forEach((starElement, index) => {
      const randomDelay = index < rows * columns && Date.now() - startTime < 1000
        ? Math.random() * 50
        : Math.random() * 1000;
  
      starElement.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <div className={css.starsBox}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <div className={css.stars}>
            {stars.map((value, index) => (
              <div key={`${index}-${value}`} className={css.star} />
            ))}
          </div>
        ) : (
          <div className={css.stars}>
            {stars.map((value, index) => (
              <div key={`${index}-${value}`} className={css.unity} />
            ))}
          </div>
        )}
      </div>
      <h1>The universe is you.</h1>
    </div>
  );
};

