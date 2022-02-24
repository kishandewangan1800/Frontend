var dice = Array.from(document.querySelectorAll(".div"));

function removeActive() {
  for (var i = 0; i < dice.length; i++) {
    dice[i].classList.remove("active");
  }
}

function getNumber() {
  var num = Math.trunc(Math.round() * 7);
  return num;
}

var num = getNumber();
for (var j = 0; j < dice.length; j++) {
  dice[num - 1].addEventListener("click", function () {
    removeActive();
    dice[num - 1].classList.add("active");
  });
}
