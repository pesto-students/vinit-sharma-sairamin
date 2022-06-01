//Problem 7.3: Detect loop in a linked list


//creating class node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
} 

//creating class linkedlist
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //to add new values in linked list
    add(value){
        var node = new Node(value);

        var current;

        if(this.head === null){  
            this.head = node;
        }else {
            current = this.head;
            
             while(current.next){ 
                current = current.next;
             }

            current.next = node; 
        } 
        this.size++ 
        return this.head
    }

    //creating loop linked list at any given node. x is position of node
    createLoop(x){
        if(x >= this.size) return this.head;
        var current = this.head
        while(current.next){ //getting the last node of linked list
            current = current.next;
        }

        var loopObj = this.head
        
        while(x-1){   
            loopObj = loopObj.next;
            x--;
        }
        current.next = loopObj;
        this.head = current;
        return this.head
    }

    //detenting loop in the linked list
    detectLoop(x){
        var current = x;      
        while(current){
            if(current.flag === "flag"){
                return true
            }
            current.flag = "flag"
            current = current.next;          
        }

        return false;
    }    
    
    //to prints the value of linked list
    printList() {
        var curr = this.head;
        var str = "";

        while (curr) {
            str += curr.value + " ";
            curr = curr.next;
        }

        return str;
    }

}

//creting incetance of LinkedList() class
var node = new LinkedList();

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var regularlinkedlist;
for(let el of arr){ //adding values in ink list
    regularlinkedlist = node.add(el);
}

//detecting loop at linked list which has no loop
var isLoop = node.detectLoop(regularlinkedlist);
console.log("Loop", isLoop); //false - means no loop found

//creating loop in the linked list
var loopLinkedList = node.createLoop(4);

//detecting loop in the linked list after creating loop in it using the createLoop(2)
isLoop = node.detectLoop(loopLinkedList);
console.log("Loop", isLoop); //true - means loop found

//time complexity is O(N)
//space complexity is O(1)
