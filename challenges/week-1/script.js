function runScript(){
    let box = document.getElementById("box");


    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let image = document.createElementNS("http://www.w3.org/2000/svg", "image");

    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "assets/3.svg")
    svg.appendChild(image)
    box.appendChild(svg)
}

runScript();