//Problem 7.4: Parenthesis Checker


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
var x = "{{}}"; //srt = {()
var y = "{}[]()"; //srt = {()
var z = "([{{}}])"; //srt = {()
var a = "{}}"; //srt = {()

//Output values
console.log(parenthesisChecker(x)); //true
console.log(parenthesisChecker(y)); //true
console.log(parenthesisChecker(z)); //true
console.log(parenthesisChecker(a)); //false

//time complexity O[x];
//space complexity O[x];
