var sounds = Array.from(document.querySelectorAll(".btn"));
document.querySelector("#stop").addEventListener("click",function(){
    stopSound()
})



function playSound(sound){
    sound.addEventListener("click", function(){

    stopSound();
    console.log(sound)
    document.getElementById(sound.innerText).play()
    })
}

function stopSound(){
    for(var i=0;i<sounds.length;i++){
        const soundPouse = document.getElementById(sounds[i].innerText)
        soundPouse.pause()
        soundPouse.currentTime = 0
    }
}



sounds.forEach((sound)=>{
    playSound(sound)  
})