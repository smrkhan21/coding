// Implement every() method in JS

/*
 every function example

 const numbers = [1, 2, 3, 4, 5];

 function isEven(item) {
    return item % 2 === 0
 }
 let result = numbers.every(isEven)
 ouput: false
*/
function customEvery(inputArray, callback) {
    for(let i = 0; i<inputArray.length; i++) {
        if(!callback(inputArray[i], i, inputArray)) {
            return false;
        }
    }
    return true;
}

Array.prototype.customEvery = customEvery;

const numbers = [1, 2, 3, 4, 5];

// Using the custom every() function
const isAllEven = numbers.customEvery((num) => num % 2 === 0);
console.log(isAllEven); // false, not all numbers are even
