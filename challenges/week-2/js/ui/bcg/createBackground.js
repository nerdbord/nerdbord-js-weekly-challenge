import { backgroundStyles } from "./background.styles.js";

export const createBackground=(node)=>{
  const bcg=document.createElement('div');
  bcg.classList.add("bcg");
  bcg.style.cssText=backgroundStyles;
  return node.appendChild(bcg)
}
