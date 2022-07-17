/**
 * Exercise4.3:Implement Fibonacci Series with Iterators
 * 1.The expected output should be achieved using Iterators only.
 * 2.For Loops, Maps should not have been used.4.3rd party libraries should not have been used.
**/

//fibonacci series with iterators
const fibonacci = {
    n: 5,
    [Symbol.iterator]: function() {
        let i = 0;
        var arr = [];
        return {
            next: () => {
                if(i <= this.n){
                    if(i === 0 || i === 1){
                        arr.push(i);
                    } else if(i > 1) {
                        var newVal = arr[i - 1] + arr[i - 2];
                        arr.push(newVal);
                    }
                    let resultObj = {value: arr[i], done: false}
                    i++
                    return resultObj;
                }else {
                    return { done: true }
                }
            }
        }
    }
}

let outcome = fibonacci[Symbol.iterator]();

console.log(outcome.next()); //{ value: 0, done: false }
console.log(outcome.next()); //{ value: 1, done: false }
console.log(outcome.next()); //{ value: 1, done: false }
console.log(outcome.next()); //{ value: 2, done: false }
console.log(outcome.next()); //{ value: 3, done: false }
console.log(outcome.next()); //{ value: 5, done: false }
console.log(outcome.next()); //{ done: true }


for (let num of fibonacci) {
    console.log(num); //0 1 1 2 3 5
}