//Problem 6.2 Spiral Order Matrix II
//Problem Description Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]


//funtion to create list of spiral-order from M*N matrix 
function spiralOrder(matrix){
    let top = 0
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;;
    let result = [];
    let size = matrix.length * matrix[0].length;

    while(result.length < size){
        for(let i=left; i <= right && result.length < size; i++){
            result.push(matrix[top][i]);
        }
        top++;
        
        for(let i=top; i <= bottom && result.length < size; i++){
            result.push(matrix[i][right]);
        }
        right--;
        
        for(let i=right; i >= left && result.length < size; i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for(let i=bottom; i >= top && result.length < size; i--){
            result.push(matrix[i][left]);
        }
        left++;
    }
    return result;
}

//time comlexity is o(n)
//space complexity is o(n)

var arr = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]];
console.log(spiralOrder(arr));
//output - [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]

var arr2 = [[ 1, 2, 3, 4], [  5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ], [ 17, 18, 19, 20 ], [ 21, 22, 23, 24 ]];
console.log(spiralOrder(arr2));
//output - [ 1,  2,  3,  4,  8, 12, 16, 20, 24, 23, 22, 21, 17, 13,  9,  5, 6,  7, 11, 15, 19, 18, 14, 10 ]
