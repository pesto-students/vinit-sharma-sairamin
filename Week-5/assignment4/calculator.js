//Create a simple Javascript function code for addition, subtraction, and multiplication of 2numbers and write the corresponding Jest based tests for it.


const mathOperations = {
    sum(a, b){
        return a + b;
    },

    diff(a, b){
        return a - b;
    },

    product(a, b){
        return a * b
    }
}

module.exports = mathOperations;
