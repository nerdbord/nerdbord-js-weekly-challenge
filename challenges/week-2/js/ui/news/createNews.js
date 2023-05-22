import { newsBoxStyles, newsTextStyles } from "./news.styles.js";
import { hoover }                        from "../../function/hoover.js";

export const createNews = (node, newsText) => {
  const bcg = document.querySelector(".bcg");
  const news = document.createElement("article");
  news.classList.add("news__box");
  news.style.cssText = newsBoxStyles;
  const text = document.createElement("p");
  news.appendChild(text);
  text.classList.add("news__text");
  text.innerText = `${newsText}`;
  text.style.cssText = newsTextStyles;
  bcg.appendChild(news);
  hoover(text);
  return node.appendChild(bcg);
};
