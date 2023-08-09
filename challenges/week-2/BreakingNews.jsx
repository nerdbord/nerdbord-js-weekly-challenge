import React from "react";
import css from "./BreakingNews.module.css";
import Marquee from "react-fast-marquee";

export const BreakingNews = () => {

  return (
    <div className={css.wrapper}>
      <div className={css.newsBox}>
        <Marquee autoFill={true}>
        <div className={css.newsText}>
            Compared to the hearing of humans, the hearing ability of cows is better in the deep and high frequency ranges. Compared to the hearing of humans, the hearing ability of cows is better in the deep and high frequency ranges.
        </div>
        </Marquee>
      </div>
    </div>
  );
};

