const panel1xyz = document.getElementById("panel-1");
const panel2xyz = document.getElementById("panel-2");
const panel3xyz = document.getElementById("panel-3");
const panel4xyz = document.getElementById("panel-4");
const panel5xyz = document.getElementById("panel-5");

function removeActivexyz() {
  panel1xyz.classList.remove("active");
  panel2xyz.classList.remove("active");
  panel3xyz.classList.remove("active");
  panel4xyz.classList.remove("active");
  panel5xyz.classList.remove("active");
}

function selectPanelNoxyz(panelnoxyz) {
  removeActivexyz();

  switch (panelnoxyz) {
    case 1:
      panel1xyz.classList.add("active");
      break;
    case 2:
      panel2xyz.classList.add("active");
      break;
    case 3:
      panel3xyz.classList.add("active");
      break;
    case 4:
      panel4xyz.classList.add("active");
      break;
    case 5:
      panel5xyz.classList.add("active");
      break;
  }
}
