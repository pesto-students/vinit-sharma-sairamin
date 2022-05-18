//Problem 6.3 Sort array of 0's,1's and 2's



//function to arrange array of 0, 1, 2 into accending order
function ascendingOrder(ar){
    for(var j=0; j<ar.length; j++){
        for(var i=0; i<ar.length; i++){
            if(ar[i] > ar[i + 1]){
                var extra = ar[i];
                ar[i] = ar[i + 1];
                ar[i + 1] = extra;
            }
        }
    }
    
    return ar;
}

//time complexity is o(n^2);
//space complaxity is o(1)

var arr = [0, 2, 1, 2, 0];
console.log(ascendingOrder(arr)); // [ 0, 0, 1, 2, 2 ]

var arr2 = [0, 1, 0];
console.log(ascendingOrder(arr2)); // [ 0, 0, 1 ]