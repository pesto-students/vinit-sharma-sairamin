/** 
Exercise4.2
Create an object calledTeacherderived from thePersonclass, and implement a method calledteachwhich receives a string called subject, and prints out:
[teacher's name]is now teaching[subject]
 **/

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

function Teacher(){};

Teacher.prototype = Person.prototype;

Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}

var him = new Teacher();
him.initialize("Adam",45);
var result = him.teach("Inheritance");
console.log(result); 