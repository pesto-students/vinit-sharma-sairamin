//Problem 6.3 Sort array of 0's,1's and 2's



//function to arrange array of 0, 1, 2 into accending order
//time complexity is reduced with this algorithem.
function ascendingOrder(ar){
    var count=0;
    var size = ar.length;
    var sorted=false;
    while(!sorted){  
        sorted=true;    
        for(var i=0; i<size - 1; i++){
            count++;
            if(ar[i] > ar[i + 1]){
                var extra = ar[i];
                ar[i] = ar[i + 1];
                ar[i + 1] = extra;
                sorted=false;
            }
        }
      size--;
    }
    
    return ar;
}

//time complexity is now o(n * n-1/2) which can be concluded to o(n);
//space complaxity is o(1)
//execution time reduced to 8.872ms from previous default: 10.517ms


var arr = [0, 2, 1, 2, 0];
console.log(ascendingOrder(arr)); // [ 0, 0, 1, 2, 2 ]

var arr2 = [0, 1, 0];
console.log(ascendingOrder(arr2)); // [ 0, 0, 1 ]
