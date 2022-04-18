
//function to create data-stack 
function createStack() {

    var items = [];

    //pushing items in array
    function push(item){
        items.push(item);
    }

    //deleting items from the array
    function pop(){
        items.pop();
    }

    //printing the value of items
    function print(){
        console.log(items);
    }

    return [push, pop, print]; //array destructuring

}

const [push, pop, print] = createStack(); //returning functions
push(12);
push(8);
push(5);
push(4);
pop();
print(); // [12, 8, 5]

console.log(items) // it will give error beacuse from outside of createStack() function we can not access "items" array. 
