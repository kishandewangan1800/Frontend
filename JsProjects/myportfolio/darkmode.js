const dark = document.getElementById("dark");
const light = document.getElementById("light");

const root = document.querySelector(":root");

const body = document.getElementById("body");
const header = document.querySelector(".header");


window.addEventListener("load",()=>{
    root.style.setProperty('--darkmode', localStorage.getItem('--darkmode'));
    root.style.setProperty('--lightmode', localStorage.getItem('--lightmode'));
    root.style.setProperty('--bg-image',localStorage.getItem('--bg-image'));
    root.style.setProperty('--title-color', localStorage.getItem('--title-color'));
    root.style.setProperty('--bg-color', localStorage.getItem('--bg-color'));
    root.style.setProperty('--hover', localStorage.getItem('--hover'));
    root.style.setProperty('--ele-background', localStorage.getItem('--ele-background'));
    root.style.setProperty('--button-hover-color', localStorage.getItem('--button-hover-color'));
    root.style.setProperty('--hero-color', localStorage.getItem('--hero-color'));
})



dark.addEventListener("click",()=>{

    root.style.setProperty('--darkmode', 'block');
    root.style.setProperty('--lightmode', 'none');
    root.style.setProperty("--bg-image","url('image/background3.jpg')");
    root.style.setProperty('--title-color', '#75f3d8');
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--hover', '#32b3a8');
    root.style.setProperty('--ele-background', '#4444449f');
    root.style.setProperty('--button-hover-color', 'black');
    root.style.setProperty('--hero-color', '#ffffff');

    localStorage.setItem('--darkmode', 'block');
    localStorage.setItem('--lightmode', 'none');
    localStorage.setItem("--bg-image","url('image/background3.jpg')");
    localStorage.setItem('--title-color', '#75f3d8');
    localStorage.setItem('--bg-color', '#000000');
    localStorage.setItem('--hover', '#32b3a8');
    localStorage.setItem('--ele-background', '#4444449f');
    localStorage.setItem('--button-hover-color', 'black');
    localStorage.setItem('--hero-color', '#ffffff');

})

light.addEventListener("click",()=>{

    root.style.setProperty('--darkmode', 'none');
    root.style.setProperty('--lightmode', 'block');
    root.style.setProperty('--bg-image','url("image/background.jpg")');
    root.style.setProperty('--title-color', '#46176d');
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--hover', '#6422ff');
    root.style.setProperty('--ele-background', '#c1c1c19f');
    root.style.setProperty('--button-hover-color', 'white');
    root.style.setProperty('--hero-color', '#000000');

    localStorage.setItem('--darkmode', 'none');
    localStorage.setItem('--lightmode', 'block');
    localStorage.setItem('--bg-image','url("image/background.jpg")');
    localStorage.setItem('--title-color', '#46176d');
    localStorage.setItem('--bg-color', '#ffffff');
    localStorage.setItem('--hover', '#6422ff');
    localStorage.setItem('--ele-background', '#c1c1c19f');
    localStorage.setItem('--button-hover-color', 'white');
    localStorage.setItem('--hero-color', '#000000');
})
