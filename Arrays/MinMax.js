// Problem Find the maximum and minimum elements in an array.

/*
    input [40, 100, 1, 5, 25, 10];
    output Min: 1, Max: 100
*/

function minMax(inputArray) {
    inputArray = inputArray.sort((a,b) => a - b);
    return "Min: " + inputArray[0] + ", Max: " + inputArray[inputArray.length - 1]
}

console.log(minMax([40, 100, 1, 5, 25, 10]))
console.log(minMax([9, 10, 7, 8]))