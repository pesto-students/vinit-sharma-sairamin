//Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate


function hasDuplicate(arr){
    let setValue = new Set(arr);
    return setValue.size === arr.length;
}

//when array has duplicate returns false otherwise true

console.log(hasDuplicate([1, 2, 3, 4, 4])); //false 
console.log(hasDuplicate([1, 2, 3, 4])); //true