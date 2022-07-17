/** 
 * Assignment4.1
 Implement a function namedgetNumberwhich generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.
 1.JS promises should not be used.
 2.A custom promise function should be created.
 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
 4.Should be able to accept callbacks as props.
*/


//definition of custom promise
function Ipromise(promiseCallbackFn){

    var state = "pending";

    //function changing state to "resolve"
    function resolve(val){
        if(val){
            state = val;
        }
    }

    //function changing state to "reject" 
    function reject(error){
        if(error){
            state = error;
        }
        
    }   

    promiseCallbackFn(resolve, reject);
    
    //state is pending if no resolve or reject
    if (state === "pending") return { state: "pending" };

    return {
        then: (thenFn) => {
            if(state === "resolve"){
                thenFn({state: state});
            } 
            return new Ipromise(promiseCallbackFn);      
        },
        catch: (catchFn) => {
            if(state === "reject"){
                catchFn({state: state});
            }
            return new Ipromise(promiseCallbackFn);
        }
    }
}


//first instance from custom Ipromise to resolve/reject state according condition. 
var responseFirst = (randomVal) => new Ipromise((resolve, reject) => {
    if((randomVal % 5) !== 0){
        resolve("resolve");
    } else {
        reject("reject");
    }
});

//function to generate random number
function getNumber(){
    var random = Math.floor(Math.random() * 100);
    return random;
}

var randomNum = getNumber();
console.log("RandomNumber", randomNum); //

//it will print state resolve or reject acoording condition
responseFirst(randomNum).then(val => console.log(val)).catch(err => console.log(err));


//second instance from custom Ipromise returning pending state. 
const responseSecond = new Ipromise((resolve, reject) => {
    //state will be "pending" beacause niether resolve nor reject is used.
})

console.log(responseSecond); //{ state: 'pending' }