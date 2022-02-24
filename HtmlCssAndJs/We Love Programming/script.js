const textE1 = document.getElementById("text");
const speedE1 = document.getElementById("speed");

var text = "We love Programming....";


const num = 400;

let time = num / speedE1.value;

let idx = 1;
let idy = -1;
var flag = true;

writeText();

function writeText() {
  if (flag) {
    textE1.innerHTML = text.slice(0, idx);
    idx++;
    if (idx >= text.length) {
      flag = false;
      idy = -1;
    }
  }

  if (flag === false) {
    textE1.innerHTML = text.slice(0, idy);
    idy--;
    if (Math.abs(idy)===idx) {
     idx = 1;
     flag= true;
    }
  }

  setTimeout(writeText, time);
}

speedE1.addEventListener("input", (e) => (time = num / e.target.value));
