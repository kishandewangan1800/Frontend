const ludoBody = document.querySelector(".ludo-body");

const noOfBox = 100;

for(let i =1;i<=noOfBox;i++){
    const ludoBox = document.createElement("div");
    ludoBox.classList.add("ludo-box");
    ludoBody.appendChild(ludoBox);

}


