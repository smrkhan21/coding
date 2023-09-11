// Problem Find the missing number in an array of consecutive integers.

function findMissingNumber(inputArray) {
    for(let i = 0; i < inputArray.length-1; i++) {
        if(inputArray[i] + 1 !== inputArray[i+1]) return inputArray[i] + 1
    }
    return false;
}
consecutive_integers = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10]
console.log(findMissingNumber(consecutive_integers))