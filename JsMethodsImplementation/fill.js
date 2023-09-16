// Implement fill() method in JS

/*
It overwrites original array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi",1,3)

output: ["Banana", "Kiwi", "Kiwi", "Mango"]
*/

Array.prototype.customFill = function(value, start = 0, end = this.length) {
    start = Math.max(start >= 0 ? start : this.length + start, 0)
    end = Math.min(end >= 0 ? end : this.length + end, this.length)

    for(let i = start; i<end; i++) {
        this[i] = value
    }

    return this
}

const myArray = [1, 2, 3, 4, 5];
myArray.customFill(0, 1, 4); // Fills elements from index 1 to 3 with 0
console.log(myArray); // Output: [1, 0, 0, 0, 5]
