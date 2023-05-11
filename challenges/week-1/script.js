function runScript(){
    let box = document.getElementById("box");


    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    let image2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "assets/3.svg")
    image2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "assets/2.svg")
    
    svg.appendChild(image)
    svg.replaceChild(image2, image)
    box.appendChild(svg)

    console.log(image.ATTRIBUTE_NODE);
    console.log(image2.ATTRIBUTE_NODE);
    
}

runScript();