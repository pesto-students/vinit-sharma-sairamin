//Problem 7.6: Implement a Queue using 2 stack


class Queue{
    constructor(){
        this.queue = [];
        this.size = 0;
    }

    //method to push into stack
    pushStack(value){            
            this.queue[this.size] = value;
            this.size++;
            return this.queue;
        } 

    //method to pop from stack;
    popStack(){
        if(!this.size){
            throw new Error("Stack Under flow");
        };
        if(this.size){
            var newArr;
            this.size--
            var popValue = this.queue[this.size];
            var newQueue = new Queue();
            for(var i=0; i<this.size; i++){
                newArr = newQueue.pushStack(this.queue[i]);
            }    
            this.queue = newArr;
            return popValue;
        }
                 
    }

    //reversing the stack
    reversStack(){
        var arr = [...this.queue];
        this.size = 0
        var dec = arr.length - 1;
        for(var i=0; i<arr.length; i++){
            this.pushStack(arr[dec]);
            dec--;
        }
        return this.queue;
    }

    //push value into the Queue
    enqueue(value){
        return this.pushStack(value);
    }

    //pop value from the queue
    dequeue(){
        if(!this.size){
            throw new Error("queue is under flow"); 
        }
        this.reversStack(); //revesed the this.queue
        var value = this.popStack(); //poped value 
        this.reversStack(); //then reversed the this.queue
        return value;
    }

    printQue(){
        return this.queue;
    }
}


//creating Queue
var newQue = new Queue();

//enqueue value 2, 3
newQue.enqueue(2)
newQue.enqueue(3)

//print the value after enqueue value
console.log(newQue.printQue()); //[ 2, 3 ]

//dequeue the value
var dequeValue = newQue.dequeue();
console.log(dequeValue); // 2 

//print the value after dequeue value
console.log(newQue.printQue()); //[ 3 ]

//enqueue value 3, 4
newQue.enqueue(4)
newQue.enqueue(5) 

//print the value after enqueue value
console.log(newQue.printQue()); //[ 3, 4, 5 ]

//dequeue the value
dequeValue = newQue.dequeue();
console.log(dequeValue);// 3

//print the value after dequeue value
console.log(newQue.printQue()); [ 4, 5 ];

//time complexity O(N)
//space Complexity O(N)
