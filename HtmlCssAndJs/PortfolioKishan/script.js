// java Script Object
// java script Methods
// Java scrip CSS 
// java Functions

// function merge(arr, left, mid, right){

//     var n1 = mid-left;
//     var n2 =right-mid;

//     var l = new Array(n1);

//     for(var i =0;i<=n1;i++){

//     }
//     var r = new Array(n2);

//     var i =0, j=0,k=0;

//     while(i<n1 && j< n2){
//         if(l[i]<r[j]){
//             arr[k]=l[i];
//         }else{
//             arr[k]=r[j];
//         }
//     }


// }





// function devide(arr, left,right){
//     if(left>=right){
//         return;
//     }

//     var mid = Math.floor((left+right)/2);
//     devide(arr, left, mid );
//     devide(arr, mid+1, right);
//     merge(arr, left, mid,right);

// }





// function mergeSort(arr){


//     return devide(arr,0,arr.length-1);
// }
// var arr = [6,7,8,9,102,1,1,110,2,33,44,55,66,6,11,21,2,3,4,577,88,99,1008];
// // document.write(arr.length);
// var array = mergeSort(arr);
// document.write(array);

var kishan = {
    batch : '11 Batch',
    place : 'Raipur',
    marks : [1,5,2,3,78,6,61,11,13,28,50,70,80,31,41,15,13,13],
    primeNumber : function(){
        for(let i=0; i<this.marks.length; i++){
          var x = this.marks[i];
          var div = 2;
          var bh = true;
          while(div<x){
              if(x %div===0){
                  bh = false;
                  break;
              }else{
                  div++;
              }
          }
          if(bh){
          document.write(x+" ");
        }
          

        }
    }

}

kishan.primeNumber();



