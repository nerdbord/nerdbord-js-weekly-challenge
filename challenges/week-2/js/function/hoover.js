export const hoover=(element)=> {
  element.addEventListener('mouseenter', () => {
    element.style.animationPlayState = 'paused';
  });
  element.addEventListener('mouseleave', () => {
    element.style.animationPlayState = 'running';
  });
}
