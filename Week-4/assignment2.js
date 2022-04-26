/** 
Exercise4.2
Create an object calledTeacherderived from thePersonclass, and implement a method calledteachwhich receives a string called subject, and prints out:
[teacher's name]is now teaching[subject]
 **/

//Person function-constructor
var Person = function() {};

//prototype of Person getting initialize() method
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Teacher function-constructor
function Teacher(){};

//Teacher's protype getting method from Person's prototype
Teacher.prototype = Person.prototype;

//prototype of Teacher getting teach() method
Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}

//incetenciating from Teacher() constroctor
var him = new Teacher();

him.initialize("Adam",45);

var result = him.teach("Inheritance");
console.log(result); //Adam is now teaching Inheritance