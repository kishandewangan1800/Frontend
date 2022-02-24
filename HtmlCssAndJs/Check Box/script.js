var obj = {
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
    "0":"0"
  }
  

  function letterCombinations(A) {
      parseInt(A);
  if(A===0){
    var letters = [""];
    return letters;
  }
  var a = Math.trunc(A/10);
  console.log(a);
  var smalloutput = letterCombinations(a);
  var word = obj[A%10];
  var output=[];
  
  for(let i =0;i<smalloutput.length;i++){
    for(let j =0;j<word.length;j++){
      output.push(smalloutput[i]+word.charAt(j))
    }
  }
  return output;
  
  }
  
  var j = letterCombinations(0250);
  console.log(j);