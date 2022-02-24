const colors = ['Violet', 'Indigo' ,'Blue', 'Yellow','Orange','Pink', 'lightcoral','white'];
const container = document.querySelector('.container');

const SQUARES = 814;
for(let i =0;i<SQUARES;i++){
    const square = document.createElement("div");
    square.classList.add("square");
    
    
    square.addEventListener("mouseover", ()=> setColor(square));
    square.addEventListener("mouseout", ()=> removeColor(square));

    container.appendChild(square)
}



function randomColor(){
    const color = Math.floor(Math.random()*colors.length);
    return colors[color];
}

function setColor(element){
   const col = randomColor();

   element.style.background = col;
   element.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`
}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}