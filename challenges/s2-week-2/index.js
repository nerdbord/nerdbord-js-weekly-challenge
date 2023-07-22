const interiors = document.getElementById("interiors");
const brandIdentity = document.getElementById("brand-identity");
const visual = document.getElementById("visual");
const animation = document.getElementById("animation");
const bunch = document.getElementById("bunch");
const rumors = document.getElementById("rumors");

const interiorPic = document.getElementById("interior-pic");
const brandPic = document.getElementById("brand-pic");
const visualPic = document.getElementById("visual-pic");
const animationPic = document.getElementById("animation-pic");
const bunchPic = document.getElementById("bunch-pic");
const rumorsPic = document.getElementById("rumors-pic");

interiors.addEventListener("mouseover", () => {
  interiorPic.classList.remove("hidden");
});

interiors.addEventListener("mouseout", () => {
  interiorPic.classList.add("hidden");
});

brandIdentity.addEventListener("mouseover", () => {
  brandPic.classList.remove("hidden");
});

brandIdentity.addEventListener("mouseout", () => {
  brandPic.classList.add("hidden");
});

visual.addEventListener("mouseover", () => {
  visualPic.classList.remove("hidden");
});

visual.addEventListener("mouseout", () => {
  visualPic.classList.add("hidden");
});

animation.addEventListener("mouseover", () => {
  animationPic.classList.remove("hidden");
});

animation.addEventListener("mouseout", () => {
  animationPic.classList.add("hidden");
});

bunch.addEventListener("mouseover", () => {
  bunchPic.classList.remove("hidden");
});

bunch.addEventListener("mouseout", () => {
  bunchPic.classList.add("hidden");
});

rumors.addEventListener("mouseover", () => {
  rumorsPic.classList.remove("hidden");
});

rumors.addEventListener("mouseout", () => {
  rumorsPic.classList.add("hidden");
});
