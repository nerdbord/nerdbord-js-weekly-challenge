const svgGrid = document.querySelector('.svg-grid');
const starFiles = ['assets/1.svg', 'assets/2.svg', 'assets/3.svg', 'assets/4.svg'];

function runScript(){
    aborter();
    const loopPattern = [0, 1, 2, 3, 2, 1];

    for(let i = 0; i < 20*7; i++) {
        const img = document.createElement('img');
        img.src = starFiles[0];
        svgGrid.appendChild(img);

        setTimeout(() => {
            let counter = Math.floor(Math.random() * starFiles.length);
            setInterval(() => {
              fileIndex = loopPattern[counter];
              img.src = starFiles[fileIndex];
              if (counter === loopPattern.length - 1) {
                counter = 0;
              } else {
                counter++;
              }
            }, 800);
          }, Math.random() * 1000);
      }
    
}

function makeUnite(){
  aborter();
  for(let i = 0; i < 20*7; i++) {
    const img = document.createElement('img');
    const letterIndex = [
      21, 23, 25, 28, 30, 32, 33, 34, 36, 37, 38, 
      41, 43, 45, 46, 48, 50, 53, 56, 
      61, 63, 65, 67, 68, 70, 73, 76, 77, 78,
      81, 83, 85, 88, 90, 93, 96,
      101, 102, 103, 105, 108, 110, 113, 116, 117, 118
    ];

    img.src = letterIndex.includes(i) ? starFiles[3] : starFiles[0];
    svgGrid.appendChild(img);
  }

}

function aborter() {
  while (svgGrid.firstChild) {
    svgGrid.removeChild(svgGrid.firstChild);
  }
}
runScript();
svgGrid.addEventListener("mouseover", makeUnite)
svgGrid.addEventListener("mouseout", runScript)
