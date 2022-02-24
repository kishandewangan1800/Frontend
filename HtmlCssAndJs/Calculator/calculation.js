function calculation() {
    
    var num1 = document.getElementById("first").value;
    var num2 = document.getElementById("second").value;

    if(num1==="" && num2===""){
        alert("Please Enter Both Number")
        return;
    }else{
        if(num1===""){
            alert("Please Enter First Number")
            return;
        }

         if(num2===""){
        alert("Please Enter Second Number")
        return;
    }
}

    var x = Number(num1);
    var y = Number(num2);
    var op = String(document.getElementById("operator").value);
    var ans;

    switch (op) {
        case '+': ans = x + y;
            break;
        case '-': ans = x - y;
            break;
        case '*': ans = x * y;
            break;
        case '/': ans = x / y;
            break;
    }

    document.getElementById("answer").innerHTML = ans;
}

function reset(){
    location.reload();
}