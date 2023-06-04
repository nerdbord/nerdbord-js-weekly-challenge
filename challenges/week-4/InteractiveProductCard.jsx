import React from "react";
import css from "./InteractiveProductCard.module.css";
import { plants } from "./plants.mjs";

export const InteractiveProductCard = () => {


  return (
    <div className={css.cardGrid}>

      {plants.map((plant, index) => {
        const imagePath = new URL(`./img/${plant.imageSrc}`, import.meta.url).href;
        const imageAlt = plant.text;
        
        console.log(imagePath);
        console.log(imageAlt);

        return (
          <div className={css.cardItem} key={index}>
            <p className={css.cardText}>{plant.text}</p>
            <img className={css.cardImg} src={imagePath} alt={imageAlt} />
          </div>
        );
      })}
    </div>
  );
};