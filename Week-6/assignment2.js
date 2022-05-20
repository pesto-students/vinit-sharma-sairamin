//Problem 6.2 Spiral Order Matrix II
//Problem Description Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

//function to arrays into spiral order
function matrix(arr1, arr2, arr3){
    var arr2LastElement = arr2[arr2.length - 1]; //getting last el of arr2

    //getting arr2 element without last element
    var arr2ElementWitoutLast = arr2.splice(0, arr2.length - 1);
    arr3.reverse(); //reversing the arr3
    
    //arranged array and values in the perticular order
    var spiralList = [...arr1, arr2LastElement, ...arr3, ...arr2ElementWitoutLast ];
    return spiralList;
}

//time complexity is o(n);
//space complexity is o(1);

var arr1 = [ 1, 2, 3 ];
var arr2 = [ 4, 5, 6 ];
var arr3 = [ 7, 8, 9 ];

var arr4 = [ 1, 2, 6, 7];
var arr5 = [ 34, 50, 2, 90 ];
var arr6 = [ 78, 84, 92, 45 ];

console.log(matrix(arr1, arr2, arr3));
console.log(matrix(arr4, arr5, arr6));
