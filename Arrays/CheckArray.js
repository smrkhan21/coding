// Problem : Check if an array is sorted in ascending order.

/*
    input : [1,2,3,4]
    output : ascending
*/

function checkArray(inputArray) {
    for(let i = 0; i<inputArray.length; i++) {
        if(inputArray[i] < inputArray[i-1]) return false; 
    }
    return true;
}

console.log(checkArray([1,2,3,4]))
console.log(checkArray([1,2,0,9]))
console.log(checkArray([-1,8,34,56]))