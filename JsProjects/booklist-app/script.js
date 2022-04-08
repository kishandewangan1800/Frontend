
const addbook = document.getElementById("addbook");

const tbody = document.querySelector("tbody");

addbook.addEventListener("click",()=>{

    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const isbn = document.getElementById("isbn");

    if(title.value==="" || author.value==="" || isbn.value===""){
        showMessage("Please fill the all field", "alert")
        // alert("Please fill the form")
    }else{
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.innerHTML = title.value;
    td2.innerHTML = author.value;
    td3.innerHTML = isbn.value;
    td4.innerHTML = "<i class='fas fa-times'> </i>";


    // localStorage.setItem()

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbody.appendChild(tr);

    showMessage("List added", "success")
    title.value= "";
    author.value ="";
    isbn.value = "";
}

})

function showMessage(message, className){
    const para = document.querySelector(".para");
    para.classList.add(className);
    para.innerHTML = message;

    setTimeout(()=>{
        para.classList.remove(className);
        para.innerHTML = "";
    },2000)


}


 const bookContainer = document.querySelector(".book-container");
 bookContainer.addEventListener("click",(e)=>{
     if(e.target.classList.contains("fas")){
         e.target.parentElement.parentElement.remove();
     }

     showMessage("List Deleted", "danger")
 })


