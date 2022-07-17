/** 
 here we are understanding 
 * what is apply() method?
 * Why we use apply() method?
 * characteristics of apply() method.
 * practicle examle of apply() method 
 **/  


//what is apply() method? 
//apply() is a method of function-object which can be called on any javascript function for explicit binding of this value of function. 
//call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.

//Why we use apply() method?
//apply() method is used for the explicite binding, it means that we can call any function, and explicitly specify what object 'this' should reference within the calling function.

//characteristics of apply() method.
//The apply() method accepts arguments in an array:
//the return value is according the specified "this" value and additional arguments.
//first perameter of apply() method is for the object.
//additional perameter of apply() method are the according the perameters passed in the function as array. 

//example - we are referencing object to this value of fullName() function using apply() method. 'title', 'designation', 'company' is the additional perameters passed as an array.
function empInfo(title, designation, company){
    return `${title} ${this.firstName} ${this.lastName} worked in ${company} as ${designation}`;
}

const employee1 = {
    firstName: "Vinit",
    lastName: "Sharma"
}

const employee2 = {
    firstName: "Jaya",
    lastName: "Dheeman"
}


const result1 = empInfo.apply(employee1, ["Mr", "Senior Developer", "Microsoft"]);
console.log(result1)

const result2 = empInfo.apply(employee2, ["Miss", "Juniour Developer", "Uber"]); 
console.log(result2) 
