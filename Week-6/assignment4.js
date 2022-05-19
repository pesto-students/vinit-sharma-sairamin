//Problem 6.4 : Best time to buy and sell stock



function maximumProfit(ar){

    var minValue, arSize, status, count, maxValue, arIndex, result;

    minValue = Math.min(...ar);
    arIndex = ar.indexOf(minValue);
    arSize = ar.length - 1; 
    status = true           
    count = 0;
    maxValue = 0;

    //checking if array is in decending order 
    for( let { index, value } of ar){
        if(ar[index]>ar[index+1]){
            status = true
        }else {
            status = false;
        }
    }

    //if array is decending then profit not possible
    if(status === true) return 0; 

    //getting max profit 
    for(var i=arIndex; i<ar.length; i++){  
        if(maxValue < ar[i]){              
            maxValue = ar[i];
        }
    }
    result = maxValue - minValue;
    return result;
}

//Time complexity is o(n)
//space complexit is 0(1)

var ar = [7, 1, 5, 3, 6, 17, 4, 6, 4, 12];
console.log("ar", maximumProfit(ar)); //ar 16

var ar1 = [5, 4, 3, 12, 1, 9];
console.log("ar1", maximumProfit(ar1)); //ar1 8

var ar2 = [7,6,4,3,1];
console.log("ar2", maximumProfit(ar2)); //ar2 0
