const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle)=>toggle.addEventListener("change",(e)=>{
    transitionFunc(e.target);
    // console.log(e);
    // console.log(e.target)
}))

function transitionFunc(clicked){

    if(good.checked && cheap.checked && fast.checked){
        if(good === clicked){
            fast.checked = false;
        }

        if(cheap===clicked){
            good.checked = false;
        }

        if(fast===clicked){
            cheap.checked =false;
        }
    }

}