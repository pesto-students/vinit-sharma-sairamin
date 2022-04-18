// writing a code using concept of closure such that there is noway to access items array outside of createStack() function scope 
//in this solution we created pop() and push() function as object properties and then returned the object 

function createStack() {

    let items = [];

    let obj = {     
        push(item) {
            items.push(item);
        },
        pop() {
            items.pop();
        }
    };

    return obj;
}

const stack = createStack(); //returned an object


stack.push(10); // [ 10 ]
stack.push(5); // [ 10, 5 ]
stack.pop();// => // [ 10 ] 
console.log(stack.items); //undefined