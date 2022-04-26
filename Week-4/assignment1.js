// Implement a function namedgetNumberwhich generatesa random number. If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep thepromise resolution/rejection time as a variable.
// 1.JS promises should not be used.
// 2.A custom promise function should be created.
// 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
// 4.Should be able to accept callbacks as props.

function Proms(prosFn){

    var state = "pending";

    function resolve(val){
        if(val){
            state = val;
        }
    }

    function reject(error){
        if(error){
            state = error;
        }
        
    }   

    prosFn(resolve, reject);
    
    if (state === "pending") return { state: "pending" };

    return {
        then: (thenFn) => {
            if(state === "resolve"){
                thenFn({state: state});
            } 
            return new Proms(prosFn);      
        },
        catch: (thenFn) => {
            if(state === "reject"){
                thenFn({state: state});
            }
            return new Proms(prosFn);
        }
    }
}

var r = (randomVal) => new Proms((resolve, reject) => {

    if((randomVal % 5) !== 0){
        resolve("resolve");
    } else {
        reject("reject");
    }
});

function getNumber(){
    var random = Math.floor(Math.random() * 100);
    return random;
}

var randomVal = getNumber();

// console.log(randomVal);
// console.log(r);

//console.log(r(5));

// console.log(r(5));

 r(randomVal).then(el => console.log(el)).catch(err => console.log(err));
//  r(randomVal).catch(el => console.log(el)).then(el => console.log(el));