// What is the output of the below problem and why //

//what is the output?
//the output of below problem will be 0

//why is the output 0?
//beacause of the precedence of the functions execution. in the code variable "message  gets executes when we invoke the "createIncrement();" and put 0 into the "count" variable then we invoke function "increment();" which increases the value of "count" according the number of times we invoke the "increment();" function, then we invoke log() function to print the "message" variable value which is "count is 0" and "count" having value 0 because "message" gets executed before the invocation of "increment()" function. that is why variable "count"s value is 0.

function createIncrement() { 
    let count=0;
    function increment() {
        count++;
    }
    let message =`Count is ${count}`; 
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const[increment,log] = createIncrement();

increment();
increment();
increment();
log();// What is logged? count is 0