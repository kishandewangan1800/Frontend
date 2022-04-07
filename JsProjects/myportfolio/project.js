const moreButton = document.getElementById('more');
const lessButton = document.getElementById('less');
moreButton.addEventListener("click",()=>{
    moreButton.style.display = 'none'
    document.querySelector('.project-5').style.display = 'flex'
    document.querySelector('.project-6').style.display = 'flex'
    document.querySelector('.project-7').style.display = 'flex'
    document.querySelector('.project-8').style.display = 'flex'

    // document.querySelector('.pro-5').style.display = 'flex'
    // document.querySelector('.pro-6').style.display = 'flex'
    // document.querySelector('.pro-7').style.display = 'flex'
    // document.querySelector('.pro-8').style.display = 'flex'

    lessButton.style.display = 'block';
})

lessButton.addEventListener("click",()=>{
    lessButton.style.display = 'none'
    document.querySelector('.project-5').style.display = 'none'
    document.querySelector('.project-6').style.display = 'none'
    document.querySelector('.project-7').style.display = 'none'
    document.querySelector('.project-8').style.display = 'none'

    // document.querySelector('.pro-5').style.display = 'none'
    // document.querySelector('.pro-6').style.display = 'none'
    // document.querySelector('.pro-7').style.display = 'none'
    // document.querySelector('.pro-8').style.display = 'none'

    moreButton.style.display = 'block';
})

