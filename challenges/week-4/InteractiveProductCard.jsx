import React, { useState } from "react";
import css from "./InteractiveProductCard.module.css";

export const InteractiveProductCard = () => {
    const imagePaths = [
        './challenges/week-4/img/Rectangle1.png',
        './challenges/week-4/img/Rectangle2.png',
        './challenges/week-4/img/Rectangle3.png',
        './challenges/week-4/img/Rectangle4.png',
        './challenges/week-4/img/Rectangle5.png',
        './challenges/week-4/img/Rectangle6.png'
    ];

    return (
        <>
            <div className={css.cardGrid}>
                {imagePaths.map((imagePath, index) => (
                    <div className={css.cardItem} key={index}>
                        <p className={css.cardText}>Small plant</p>
                        <img className={css.cardImg} src={imagePath} alt={`Rectangle ${index + 1}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

