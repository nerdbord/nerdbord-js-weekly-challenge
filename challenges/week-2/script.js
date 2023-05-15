const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth*1.3;
// Load the image
const image = new Image();
image.src = "assets/tape.svg";

let x = -30;  // Starting position from the right side of the canvas
let y = 0;            // Vertical position (you can adjust this as needed)
const speed = 5;      // Speed at which the image moves (you can adjust this as needed)

// Function to update the canvas and animate the image
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update the position of the image
    x -= speed;
  
    // Draw the image on the canvas at the new position
    ctx.drawImage(image, x, y);
  
    // Check if the image's middle point has reached the left of the viewport
    const imageMiddleX = x + (image.width / 2);
    if (imageMiddleX <= 0) {
      // Reset the position of the image to the right side of the canvas
      x = -30;
    }
  
    // Request the next animation frame
    requestAnimationFrame(animate);
  }

image.onload = animate;
