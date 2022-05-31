//Problem 7.1 : Reverse the Linked list


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
    }

    //to reverse the linked list
    reverse() {
        // var node = this.head;
        var prev = null;
        var current = this.head;
        var next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
            return this.head;
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

for(let el of arr){ //adding values in ink list
    node.add(el);
}

//regular linked list
console.log("Regular LinkedList", node.printList()); //output - 1 2 3 4 5 6 7 8

node.reverse(); //reversing the link list

//printing the values of reversed linked list
console.log("Reversed LinkedList", node.printList()); //output - 8 7 6 5 4 3 2 1

//time complexity is O(N)
//space complexity is O(1)
