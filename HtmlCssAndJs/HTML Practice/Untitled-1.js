const rang = document.getElementById("rang");


function randomNumber(){
    return Math.floor(Math.random()*256);
}

function randomColor(){
    // console.log(`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`)
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}


function addShap(){
    km;/jb       
}                              

function rangDive(){
const circle = document.getElementById("circle");
addShap();
rang.addEventListener("change",()=>{
    // console.log("hello world")
    addShap();

})
}

rangDive();

window.onload = rangDive();


// window.addEventListener("load",()=>{
//     rangDive();
// })

