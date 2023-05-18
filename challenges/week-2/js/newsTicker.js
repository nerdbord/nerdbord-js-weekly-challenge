import { createBackground } from "./ui/bcg/createBackground.js";
import { createNews }       from "./ui/news/createNews.js";
import { animation }        from "./ui/news/news.styles.js";

document.addEventListener("DOMContentLoaded",()=>{
  const body=document.querySelector('body');
  const styleElement = document.createElement('style');
  document.head.appendChild(styleElement);
  styleElement.textContent = animation;
  createBackground(body);
  createNews(body, 'Compared to the hearing of humans, the hearing ability of cows is better in the deep and high frequency ranges. Compared to the hearing of humans, the hearing ability of cows is better in the deep and high frequency ranges');

});
