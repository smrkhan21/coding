// Implement filter() method in JS

/*
    The filter() method creates a new array filled with elements that pass a test provided by a function.

    The filter() method does not execute the function for empty elements.

    The filter() method does not change the original array

    syntax
    array.filter(function(currentValue, index, arr), thisValue)

    example:
    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
        return age >= 18;
    }

    ouput: [32,33,40]

*/

Array.prototype.customFilter = function(condition) {
    const filteredArray = []
    
    for(let i = 0; i<this.length; i++) {
        if(condition(this[i], i, this)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

function checkAdult(age) {
    return age >= 18;
}

const ages = [32, 33, 16, 40];
const result = ages.customFilter(checkAdult);
console.log(result)