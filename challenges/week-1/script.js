//import svg1 from './assets/1.svg'
//import svg2 from './assets/2.svg'
//import svg3 from './assets/3.svg'
//import svg4 from './assets/4.svg'

function runScript(){
    let box = document.getElementById("box");


    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let image = document.createElementNS("http://www.w3.org/2000/svg", "image");

    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "assets/3.svg")
    svg.appendChild(image)
    box.appendChild(svg)
}

runScript();