//Problem 6.6 : 3 sumGiven an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.Return the sum of the three integers.Assume that there will only be one solution.
//Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)


//
function closestSum(arr, target){
    for(var i=0; i<arr.length -2; i++){
        for(var j=0; j<arr.length -2; i++){
            if(arr[i] + arr[j+1] + arr[j+2] === (target+1)){
                return arr[i] + arr[j+1] + arr[j+2];
            }
        }
    }

}

//time complexity is o(n^2);
//space complexity is o(1);

var arr = [-1, 2, 1, -4];
var target = 1;

console.log(closestSum(arr, target)); //2
