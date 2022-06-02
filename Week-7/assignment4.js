//Problem 7.4: Parenthesis Checker

//to solve Parenthesis Checker problem I used stack. I took an array in which I push current parenthesis when it doesn't match with the parenthesis is in object but when they match I pop out the parenthesis from that array. so when function returns emty array it means parenthesis are in perfect formation and when function returns array with values then it means parenthesis are not in perfect formation. 

//checking the perfect formation of parenthesis
function parenthesisChecker(x){
    var finalArr = [];
    var obj = {
        "}": "{",
        "]": "[",
        ")": "(",
        "{": "}",
        "(": ")",
        "[": "]",
    }

    for(var i=0; i<x.length; i++){ 
        var objValue = obj[x[i]];  
        var arrLastValue = finalArr[finalArr.length - 1];      
        if(arrLastValue === objValue){  
            finalArr.pop(); 
        }else {
            finalArr.push(x[i]);
        }
    }
    return finalArr.length === 0 ? true : false   
}

//Input values
var x = "{{}}"; 
var y = "{}[]()"; 
var z = "([{{}}])"; 
var a = "{}}"; 

//Output values
console.log(parenthesisChecker(x)); //true
console.log(parenthesisChecker(y)); //true
console.log(parenthesisChecker(z)); //true
console.log(parenthesisChecker(a)); //false

//time complexity O[x];
//space complexity O[x];
