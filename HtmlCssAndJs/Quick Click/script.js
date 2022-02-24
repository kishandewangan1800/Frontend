const start = document.getElementById("start");
const gameInst = document.querySelector(".heading-instruction");
const headingGame = document.querySelector(".heading-game");
const gameArea = document.getElementById("game-area");
const message = document.getElementById("message");
const message1 = document.getElementById("message1");

let score = 0;
let inplay = false;

let playArea = {};

function randomTime() {
    let num = 3000;
    return randomNumber(num);
}

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function randomeColor() {
    return "#" + randomNumber(255).toString(16).padStart(2, "0") + randomNumber(255).toString(16).padStart(2, "0") + randomNumber(255).toString(16).padStart(2, "0");
}

function getBottom() {
    let bottom = gameArea.clientHeight;
    bottom = bottom -100;

    return randomNumber(bottom) + "px";
}

function getLeft() {
    let left = gameArea.clientWidth;
    left = left - 100;
    return randomNumber(left) + "px";
}

function startGame() {
    time = randomTime();
    const box = document.createElement("div");
    box.classList.add("box");

    let bgcolor = randomeColor();
    // console.log(bgcolor);
    box.style.backgroundColor = bgcolor;

    const bottom = getBottom();
    const left = getLeft();
    box.style.bottom = bottom;
    box.style.left = left;

    box.start = new Date().getTime();
    box.addEventListener("click", hit);

    playArea.tempTimer = setTimeout(
        () => hit({ target: { start: box.start } }),
        2000
    );

    gameArea.appendChild(box);
}

let duration;

function hit(e) {
    headingGame.innerHTML ="";
    let start = e.target.start;
    let end = new Date().getTime();

    let duration = (end-start)/1000;

    if (playArea.tempTimer) {
        clearTimeout(playArea.tempTimer);
    }

    clearTimeout(playArea.timer);
    message.innerHTML = `it took you ${duration} seconds to click`

    const maxDuration = 2;
    
    if (duration > maxDuration) {
        // console.log(duration +"        "+ maxDuration)
        gameArea.children[0].remove();
        headingGame.innerHTML = `Too Slow! <span id="loser"> You Lost </span>Your Score was ${score}. <br> Click the start button to play again`
        // console.log(headingGame);
        resetGame();

    }else{
        gameArea.children[0].remove();
        playArea.timer = setTimeout(startGame, randomNumber(4000))
        score++;
    }

    if(score===15){
        headingGame.innerHTML = `You reached ${score}! <span id="winner"> You win!</span>
        <br> Click the start button to play again!`;
        gameInst.innerHTML ="";
        message1.innerHTML =`Score : ${score} of 15`
       
        resetGame();

    }else{
        message1.innerHTML =`Score : ${score} of 15`
    }
}

function resetGame(){
    clearTimeout(playArea.timer);
    inplay = false;
    gameInst.innerHTML = "Play Again! Click the start Button";
    start.style.display = "block";
    message1.innerHTML="";
}

start.addEventListener("click", () => {
    inplay = true;
    gameInst.style.display = "none";
    gameInst.innerHTML ="";
    headingGame.innerHTML = "Starting..."
    start.style.display = "none"
    playArea.timer = setTimeout(startGame, randomNumber(4000));
    message.innerHTML = " ";
    message1.innerHTML ="";
    score =0;
    duration =0;

});