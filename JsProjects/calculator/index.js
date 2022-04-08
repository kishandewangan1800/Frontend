let display = document.getElementById("display");
let display1 = document.getElementById("display-1");
let button = Array.from(document.getElementsByClassName("btn"));

 

function calculator(btnxyz){
    btnxyz.addEventListener("click", (xyz)=>{
        switch(xyz.target.innerText){
            case "C": display.innerText = "";
                     display1.innerText = "";
                break;
            case "←": if(display.innerText=="Error" || display.innerText=="undefined" || display.innerText=="Infinity"){
                         display.innerText= "";
                         display1.innerText = "";

                        }else{
                         display.innerText = display.innerText.slice(0,-1);
                        }
                break;

            case"=" : if(display.innerText=="Error" ){
                        display.innerText="Error"
                        display1.innerText="Error"
                        break;
                        }else if(display.innerText[0]=="/"){
                            display1.innerText= display.innerText;
                            display.innerText="Error"
                        }else{

                         try{
                            display1.innerText = display.innerText;
                          display.innerText =  eval(display.innerText); 

                       }catch{
                        display.innerText = "Error";
                         }
                     }
                break;
            default:
                  let x = display.innerText;
                  if(x[0]=="0"){
                      display.innerText = display.innerText.slice(1, x.length);
                      x= display.innerText;
                  }


                switch(xyz.target.innerText){
                    case "+": if(x[x.length-1]=="+" || x[x.length-1]=="-" || x[x.length-1]=="/" || x[x.length-1]=="*"){
                        display.innerText = display.innerText.slice(0,-1) + xyz.target.innerText;
                    }else{
                        display.innerText = display.innerText + xyz.target.innerText;
                    }
                    break;

                    case "-": if(x[x.length-1]=="+" || x[x.length-1]=="-" || x[x.length-1]=="/" || x[x.length-1]=="*" ){
                        display.innerText = display.innerText.slice(0,-1) + xyz.target.innerText;
                    }else{
                        display.innerText = display.innerText + xyz.target.innerText;
                    }
                    break;

                    case "*": if(x[x.length-1]=="+" || x[x.length-1]=="-" || x[x.length-1]=="/" || x[x.length-1]=="*" ){
                        display.innerText = display.innerText.slice(0,-1) + xyz.target.innerText;
                    }else{
                        display.innerText = display.innerText + xyz.target.innerText;
                    }
                    break;

                    case "/": if(x[x.length-1]=="+" || x[x.length-1]=="-" || x[x.length-1]=="/" || x[x.length-1]=="*"){
                        display.innerText = display.innerText.slice(0,-1) + xyz.target.innerText;
                    }else{
                        display.innerText = display.innerText + xyz.target.innerText;
                    }
                    break;

                    default:
                        if(x[x.length-1]=="0"){
                            if(x[x.length-2]=="+" || x[x.length-2]=="-"  || x[x.length-2]=="*" || x[x.length-2]=="/" || x[x.length-2]=="(" || x[x.length-2]==")" ){
                                display.innerText = display.innerText.slice(0,-1) + xyz.target.innerText;
                            }else{
                                display.innerText = display.innerText + xyz.target.innerText;
                            }
                        }else{
                        display.innerText = display.innerText + xyz.target.innerText;
                        }
                    break;
                }

                
        }
    })
}

button.map(abc=>calculator(abc));