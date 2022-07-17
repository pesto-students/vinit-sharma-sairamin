//Problem 7.5: Next Greater ELement


//function to get the greater element.
function greaterEl(ar){
    var finalArr = [];
    for(var i=0; i<ar.length; i++){ 
        var j = i+1;
        var state = false;  
        for(var j; j<ar.length; j++){
            if(ar[i] < ar[j]){
                finalArr.push(ar[j]);
                state = true
                break;
            }
        }
        if(!state){
            finalArr.push(-1);
        }
    }
    return finalArr;   
}

//Input
var demoArr1 = [1,3,2,4];
var demoArr2 = [6, 8, 0, 1, 3];

//Output
console.log(greaterEl(demoArr1)); // [ 3, 4, 4, -1 ]
console.log(greaterEl(demoArr2)); // [ 8, -1, 1, 3, -1 ]

//time complexity O(N^2);
//space complexity O(N);
