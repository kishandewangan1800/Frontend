const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// const msHand = document.querySelector('.ms-hand')

function setTime(){

    let now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const secDegrees = ((seconds/60)*360)+90
    secondHand.style.transform = `rotate(${secDegrees}deg)`

    const minDegrees = (minutes/60*360)+90 +(seconds/60)*6
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hourDegrees = (hours/12*360)+90 +(minutes/60)*30
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setTime,10)

setTime()


//your code here!
// const ss = document.querySelector(".second-hand");
// const mm = document.querySelector(".min-hand");
// const hh = document.querySelector(".hour-hand");


// function setTime(){
//   let now = new Date();
//   const seconds= now.getSeconds;
//   const min = now.getMinutes;
//   const hour = now.getHours;

//   const secDegree = ((second/60)*360)+90;
//   ss.style.transform = `rotate(${secDegree}deg)`

//    const minDegree = (min/60*360)+90 +(second/60)*6
//     mm.style.transform = `rotate(${minDegree}deg)`

//     const hourDegree = (hour/12*360)+90 +(min/60)*30
//     hh.style.transform = `rotate(${hourDegree}deg)`
// }


// setInterval(setTime,10);
// setTime();