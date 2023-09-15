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

Array.prototype.customEvery = function(callback) {
    for(let i = 0; i<this.length; i++) { // 'this' here is array(numbers)
        if(!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

const numbers = [1, 2, 3, 4, 5];
function isEven(num) {
    return num % 2 === 0
}
// Using the custom every() function
const isAllEven = numbers.customEvery(isEven);
console.log(isAllEven); // false, not all numbers are even
