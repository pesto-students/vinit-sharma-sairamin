/** 
 here we are understanding 
 * what is call() method?
 * Why we use call() method?
 * characteristics of call() method.
 * practicle examle of call() method 
 **/  


//what is call() method? 
//call() is a method of function-object which can be called on any javascript function for explicit binding of this value of function. 
//call() method is similar to bind() method but difference is bind() method returns function but call() method final value.

//Why we use call method?
//call() method is used for the explicite binding, it means that we can call any function, and explicitly specify what object 'this' should reference within the calling function.

//characteristics of call() method.
//call() method takes additinal arguments.
//the return value is according the specified "this" value and additional arguments.
//call() method does not make the copy of the function, it being called on.
//call() method executed the function it was called upon.
//first perameter of call() method is for the object.
//additional perameter of call() method are the according the perameters passed in the function which was called on. 

//example - we are referencing object to this value of fullName() function using call() method. 'title' is the additional perameter.
function fullName(title){
    return `Student full name is ${title} ${this.firstName} ${this.lastName}`;
}

const student1 = {
    firstName: "Vinit",
    lastName: "Sharma"
}

const student2 = {
    firstName: "Alexa",
    lastName: "Amazon"
}



const result1 = fullName.call(student1, "Mr"); 
const result2 = fullName.call(student2, "Miss");

console.log(result1); //Student full name is Vinit Sharma
console.log(result2); //Student full name is Vinit Sharma