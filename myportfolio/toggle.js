const toggleEve = document.getElementById("toggle-bar");
const bars = document.querySelectorAll(".tog");
const listItem = document.querySelector(".nav-ulist");

const resize = document.getElementById("body");

let flag = true;

const listItemAll = document.querySelectorAll(".list-item");

listItemAll.forEach((item) => {
  item.addEventListener("click", () => {
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });

    if (resize.clientWidth <= 550) {
      listItem.style.opacity = 0;
      listItem.style.display ="none"
      flag = true;
    }
  });
});

const navBar = document.querySelector(".nav-bar");

// window.addEventListener("scroll",()=>{
//   setTimeout(()=>{
//   navBar.style.position = "fixed"
//   navBar.style.opacity = 1;
//   navBar.style.transition = "0.3s ease-in-out"
//   setTimeout(()=>{
//     navBar.style.position = "relative";
//     navBar.style.opacity = 0;
//     navBar.style.transition = "0.3s ease-in-out"
//   },3000)
// },2000)
// })


var timer = null;
window.addEventListener("scroll",visiblityNavbar),false;

function timeoutFunc() {
  // do something
  if(resize.clientWidth>550){
    listItem.style.opacity = 1;
    listItem.style.display ="flex"
  }else{
    listItem.style.opacity = 0;
    listItem.style.display ="none"
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
  navBar.style.position = "absolute";
  navBar.style.transition = "0.3s ease-in-out";
}

function visiblityNavbar() {
  if (timer !== null) {
    navBar.style.position = "fixed";
    navBar.style.transition = "0.3s ease-in-out";
    clearTimeout(timer);
  }

  timer = setTimeout(timeoutFunc, 2500);
  navBar.addEventListener("mouseenter",()=>{
    clearTimeout(timer);
  })
  navBar.addEventListener("mouseleave",()=>{
    timer = setTimeout(timeoutFunc, 2500);
  })
}


// window.addEventListener("click", () => {
//   bars.forEach((bar) => {
//     bar.classList.remove("active");
//   });
//   listItem.style.opacity = 0;
//   flag = true;
// });

toggleEve.addEventListener("click", () => {
  if (flag) {
    bars.forEach((bar) => {
      bar.classList.add("active");
    });
    listItem.style.opacity = 1;
    listItem.style.display = "block"
    flag = false;
  } else {
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
    listItem.style.opacity = 0;
    listItem.style.display = "none"

    flag = true;
  }
});

window.addEventListener("resize", () => {
  if (resize.clientWidth >= 550) {
    listItem.style.display = "flex";
    listItem.style.opacity = 1;
  } else if (resize.clientWidth < 550) {
    listItem.style.opacity = 0;
    listItem.style.display = "none";
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
    flag = false;
  }
});


