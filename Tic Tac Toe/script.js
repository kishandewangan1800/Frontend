const header = document.querySelector(".message");
const game = document.getElementById("game");
const submit = document.getElementById("start");
const form = document.getElementById("form");

let player1 = document.getElementById("player1")
let player = document.getElementById("player2")
let turn = true;

const noOfBox = 9;

for (let i = 0; i < noOfBox; i++) {
    const gameSlot = document.createElement("div");
    gameSlot.classList.add("game-slot")
    game.appendChild(gameSlot);

    gameSlot.addEventListener("click", (e) => {

        if (turn) {
            gameSlot.innerText = `X`
            gameSlot.classList.add("x");
            console.log(gameSlot);
            // CheckWinner()
            // showMessage()
            turn = false;

        } else {
            
            gameSlot.innerText = `O`
            gameSlot.classList.add("o");
            console.log(gameSlot);
            // CheckWinner()
            // showMessage()
            turn = true;
        }
    });
}




submit.addEventListener("click", () => {
    game.style.display = "flex"
    form.style.display = "none"
})
