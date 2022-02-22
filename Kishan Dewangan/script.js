const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((nav)=> nav.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
    navToggle.classList.remove("disable")
    navClose.classList.add("disable")

}))

console.log(navMenu)
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
        navToggle.classList.add("disable")
        navClose.classList.remove("disable")
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
        navToggle.classList.remove("disable")
        navClose.classList.add("disable")
    })
}
