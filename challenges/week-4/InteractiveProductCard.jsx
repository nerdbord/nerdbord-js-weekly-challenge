import React from "react";
import css from "./InteractiveProductCard.module.css";

export const InteractiveProductCard = () => {
  const images = [
    {
      src: '/img/Rectangle4.png',
      text: 'Small plant'
    },
    {
      src: '/img/Rectangle2.png',
      text: 'Long plant'
    },
    {
      src: '/img/Rectangle3.png',
      text: 'Stylish plant'
    },
    {
      src: '/img//img/Rectangle4.png',
      text: 'Glass plant'
    },
    {
      src: '/img/Rectangle5.png',
      text: 'Standard plant'
    },
    {
      src: '/img/Rectangle6.png',
      text: 'Cosy plant'
    }
  ];

  return (
    <div className={css.cardGrid}>
      {images.map((image, index) => (
        <div className={css.cardItem} key={index}>
          <p className={css.cardText}>{image.text}</p>
          <img className={css.cardImg} src={image.src} alt={`Rectangle ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
