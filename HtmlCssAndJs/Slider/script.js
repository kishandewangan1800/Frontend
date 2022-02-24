const upSide = document.getElementById("up");
const cross = document.getElementById("cross");
const homeState = document.getElementById("home-state")

const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slideLength = slideRight.querySelectorAll(".background-image").length;

var slideImage = slideRight.querySelectorAll(".background-image");

let activeSlideIndex = 0;

upSide.addEventListener("click", () => {
    homeState.classList.remove("disable")
    // homeState.style.bottom = "500px";
    upSide.classList.add("disable");
    cross.classList.remove("disable")
});

cross.addEventListener("click", () => {
    homeState.classList.add("disable");
    upSide.classList.remove("disable");
    cross.classList.add("disable");
})

const states = document.querySelectorAll(".state");

states.forEach((state, idx) => state.addEventListener("click", () => {
    console.log(idx);
    homeState.classList.add("disable");
    upSide.classList.remove("disable");
    cross.classList.add("disable");
    activeSlideIndex = idx ;
    const slideHeight = sliderContainer.clientHeight;

    slideRight.style.transform = `translateY(-${(activeSlideIndex * slideHeight)}px)`
    slideLeft.style.transform = `translateY(${(activeSlideIndex * slideHeight)}px)`
    // textUpdate(activeSlideIndex);


}));




slideLeft.style.top = `-${((slideLength - 1) * 100)}%`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));



const changeSlide = (direction) => {
    const slideHeight = Math.ceil(sliderContainer.clientHeight);
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;

        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${(activeSlideIndex * slideHeight)}px)`
    slideLeft.style.transform = `translateY(${(activeSlideIndex * slideHeight)}px)`
    // textUpdate(activeSlideIndex);

}
