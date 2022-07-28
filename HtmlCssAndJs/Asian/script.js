const change = document.getElementById("change_button");
const reset = document.getElementById("reset_button");


change.addEventListener("click", changeEvent);
reset.addEventListener("click", resetEvent);


function changeEvent() {
  const block = document.getElementById("block_id");
  const color = document.getElementById("colour_id");
  resetEvent();

  const grid = document.getElementById(block.value);
  grid.style.backgroundColor = color.value;
  block.value = "";
  color.value = "";
}

function resetEvent() {
  for (let i = 1; i <= 9; i++) {
    var griditem = document.getElementById(i);
    griditem.style.backgroundColor = "transparent";
    console.log(griditem);
  }
}




