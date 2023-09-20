// Implement reduce method in JS

/*
    The reduce() method executes a reducer function for array element.

    The reduce() method returns a single value: the function's accumulated result.

    The reduce() method does not execute the function for empty array elements.

    The reduce() method does not change the original array.

    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    eg: 
    const numbers = [15.5, 2.3, 1.1, 4.7];
    console.log(numbers.reduce(getSum, 0));

    function getSum(total, num) {
        return total + Math.round(num);
    }

    output: 24
*/

Array.prototype.customReduce = function(cb, initialValue) {
    let acc = initialValue !== undefined ? initialValue : arr[0];
    let start = initialValue !== undefined ? 0 : 1;

    for(let i = start; i<this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }

    return acc;
}

const numbers = [15.5, 2.3, 1.1, 4.7];
    console.log(numbers.customReduce(getSum, 0));

function getSum(total, num) {
    return total + Math.round(num);
}