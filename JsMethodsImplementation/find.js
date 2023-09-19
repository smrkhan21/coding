// Implement find method inside Javascript

/*
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.

array.find(function(currentValue, index, arr),thisValue)

eg:
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

ages.find(checkAge)

output: 20
*/


Array.prototype.customFind = function(callback) {
    for(let i = 0; i < this.length; i++) {
        let result;
        if(result = callback(this[i],i, this)) {
            if(result) return this[i]
        }
    }
    return null
}


const ages = [3, 10, 19, 20];

function checkAge(age) {
  return age > 18;
}

console.log(ages.customFind(checkAge))

// output: 20