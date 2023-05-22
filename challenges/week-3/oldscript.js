function popButton() {
    console.log("hahaha");
    var overlay = document.querySelector('.overlay');
    overlay.classList.add('pop-animation');
    overlay.style.opacity = 1;
  
    var buttonText = document.querySelector('.button-text');
    buttonText.textContent = 'Popped!';
    
    setTimeout(function() {
      overlay.classList.remove('pop-animation');
      overlay.style.opacity = 0;
    }, 500);
}
  