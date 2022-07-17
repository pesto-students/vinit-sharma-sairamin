/** 
 here we are understanding 
 * what is bind() method?
 * Why we use bind() method?
 * characteristics of bind() method.
 * practicle examle of bind() method 
**/

//what is bind() method?
//bind() is a method of function-object which can be called on any javascript function for explicit binding of this value of function.
//call() method is similar to bind() method but difference is bind() method returns function but call() method final value.


//Why we use bind() method?
//bind() method is used for the explicite binding, it means that we can call any function, and explicitly specify what object 'this' should reference within the calling function.

//characteristics of bind() method.
//bind() method takes additinal arguments.
//the return function is according the specified "this" value and additional arguments.
//bind() method does not executed the function it was called upon.
//first perameter of bind() method is for the object.


//practicle example
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


//case-1
const result1 = fullName.bind(student1); //returns function
console.log(result1) //[Function: bound fullName]
console.log(result1("Mr")); //Student full name is Mr Vinit Sharma

              //or you can write in concise way

const result2 = fullName.bind(student1, "Mr"); //returns function
console.log(result2) //[Function: bound fullName]
console.log(result2()); //Student full name is Mr Vinit Sharma              


//case-2
const result3 = fullName.bind(student2); //returns function
console.log(result3) //[Function: bound fullName]
console.log(result3("Miss")); //

              //or you can write in concise way
              
const result4 = fullName.bind(student2, "Miss"); //returns function
console.log(result4) //[Function: bound fullName]
console.log(result4());         