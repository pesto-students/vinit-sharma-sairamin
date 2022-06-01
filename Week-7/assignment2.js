//Problem 7.2 : Rotate Linked List


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

    //method to rotate given linked list from position k
    rotate(k){
        if(k === this.size || k === 0) return this.printList();
        if(k > this.size || k === -1) return "input value is either -1 or greater then the size of linked list";

        var m = k-1;

        var secondPartLinkedL = this.head;

        //setting head to the "k" position in the this.head
        while(k){
            secondPartLinkedL = secondPartLinkedL.next; 
            k--;
        }

        //creating copy of this.head into "fisrtPartLinkedL"
        var fisrtPartLinkedL = {...this.head};
        var lastObjFisrtPartLinkedL = fisrtPartLinkedL;

        if(m === 0){
            lastObjFisrtPartLinkedL.next = null
        }

        while(m){
            lastObjFisrtPartLinkedL = lastObjFisrtPartLinkedL.next
            if(m===1){
                lastObjFisrtPartLinkedL.next = null
            }
            m--        
        }

        var lastObjOfsecondPartLinkedL = secondPartLinkedL;
        while(lastObjOfsecondPartLinkedL.next){
            lastObjOfsecondPartLinkedL = lastObjOfsecondPartLinkedL.next
        }

        lastObjOfsecondPartLinkedL.next = fisrtPartLinkedL;

        this.head = secondPartLinkedL;

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

for(let el of arr){ //adding values in linked list
    node.add(el);
}

//printing regular linked list
console.log("Regular LinkedList", node.printList()); 

node.rotate(6);  //rotating the link list

//printing the values of Rotated linked list of K 
console.log("Rotated LinkedList", node.printList()); 

//time complexity is O(N)
//space complexity is O(1)
