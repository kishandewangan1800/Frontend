const baloonContainer = document.querySelector(".baloon-container");
const container = document.querySelector(".container")

const noOfBaloons = 25;

noOfPop =0;

for (let i = 1; i <= noOfBaloons; i++) {
  const baloon = document.createElement("div");
  baloon.classList.add("baloons");
  baloon.innerText = "POP!";
  let color = randomColor();
  baloon.style.backgroundColor = color;
  baloon.style.color = color;
  baloonContainer.appendChild(baloon);

  baloon.addEventListener("mouseenter", () => {
      if(baloon.style.backgroundColor != "transparent"){
          noOfPop++;
      }
    baloon.style.backgroundColor = "transparent";

    if(noOfPop===noOfBaloons){
        const subContainer = document.querySelector(".sub-container");
        subContainer.style.display ="block";
        container.style.display ="none";
    }
  });
}


function randomColor(){
    return `#${randomNumber().padStart(2, "0")}${randomNumber().padStart(2, "0")}${randomNumber().padStart(2, "0")}`
    
}

function randomNumber(){
    let num = Math.floor(Math.random()*255);
    let hexNum = num.toString("16");
    return hexNum;
}


const play = document.querySelector(".play");
play.addEventListener("click",()=> {
    location.reload();
})