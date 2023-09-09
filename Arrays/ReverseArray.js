// Problem Reverse an array.

/*
    input : [1,2,4,5]
    output: [5,4,2,1]
*/

function reverseArray(inputArray) {
    inputArray = inputArray.sort((a,b) => a - b)
    inputArray.reverse();
    return inputArray;
}

console.log(reverseArray([1,2,4,5]))