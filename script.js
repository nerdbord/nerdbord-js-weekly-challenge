window.onload = function () {
  let images = document.querySelectorAll(".marquee-image");
  let imageWidth = images[0].naturalWidth;

  let animationDuration = (imageWidth / window.innerWidth) * 20;

  images.forEach(function (image) {
    image.style.animationDuration = animationDuration + "s";
  });
};
