//Pair With Given Difference: Given an one-dimensional unsorted array A containing N integers.You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0.


//function to check the pair difference
function pairWithDiff(arr, diff){
    for(var i=0; i<arr.length-1;i++){
        for(var j=0; j<arr.length-1; j++){
            if(arr[j+1] - arr[i]  === diff){
                return 1
            };
        }   
    }

    return 0;
}

var arr = [5, 10, 3, 2, 50, 80]; //6
var arr2 = [-10, 20];
var arr3 = [10, 20, 5, 2, 7];

console.log(pairWithDiff(arr, 78)); //1
console.log(pairWithDiff(arr2, 30)); //1
console.log(pairWithDiff(arr3, 20)); //0
