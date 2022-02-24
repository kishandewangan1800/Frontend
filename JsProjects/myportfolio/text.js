const devText = document.getElementById("developer-text");
let textArr = ["Frontend Developer...", "Graphic Designer...", "Backend Developer...", "Digital Marketer..."];
let time = 200;
let bool = true;
let x = 1;
let l = 0;
let text = textArr[l];
let y = text.length;

setTimeout(writeText, time)


function writeText() {
    if (bool) {
        devText.innerHTML = text.slice(0, x) + "|"
        x++;
        if ( x>= text.length) {
            bool = false;
            x = 0;
        }
    }else if(!bool){
        devText.innerHTML = text.slice(0, y) + "|"
        y--;
        if (y<=0) {
            bool = true;
            l++;
            if(l>=textArr.length){
                l=0;
            }
            text = textArr[l];
            y=text.length;
           
        }

    }
    setTimeout(writeText,time);
}


