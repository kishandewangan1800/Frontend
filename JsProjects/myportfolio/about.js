const education = document.querySelectorAll(".edu");
const educat = document.querySelectorAll(".educat");

education.forEach((edu, x)=>{
    
    edu.addEventListener("click",()=>{
        removeBlock();
        educat[x].style.display = "block";
        edu.style.color = "var(--bg-color)"
        edu.style.backgroundColor = "var(--title-color)"
    })

})

function removeBlock(){
    educat.forEach(educa=>{   
            educa.style.display ="none"
    })

    education.forEach(edu=>{
        edu.style.backgroundColor = "var(--bg-color)"
        edu.style.color = "var(--title-color)"
    })
}
