//Find the contiguous subarray within an array, A of length N which has the largest sum.Input Format:


//function to get max sum of contiguas sub-array
function maxSumSubarray(arr){

    var maxint = Math.pow(2, 53) //getting 2 the power 53
    var maxSoFar = -maxint - 1; //getting the lowest value
    var maxEndingHere = 0;
    var subArray = [];

    for(var i=0; i<arr.length; i++){
        maxEndingHere = maxEndingHere + arr[i];
        if(maxSoFar<maxEndingHere){
            maxSoFar = maxEndingHere
            subArray.push(arr[i]);
        }
        if(maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }
    return { subArray, maxSoFar };
}

console.log(maxSumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));
//output - { subArray: [ -2, 4, 5 ], maxSoFar: 7 }

console.log(maxSumSubarray([1, 2, 3, 4, -10]));
//output - { subArray: [ 1, 2, 3, 4 ], maxSoFar: 10 }

console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
//output - { subArray: [ -2, 1, 4, 2, 1 ], maxSoFar: 6 }
