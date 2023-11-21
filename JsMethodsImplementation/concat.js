/** The concat() method of Array instances is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
**/

Array.prototype.customConcat = function(...arrs) {
    arrs.forEach((arr) => {
        if(Array.isArray(arr)) {
            this.push(...arr)
        } else {
            this.push(arr)
        }
    })
    return this;
}

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const array4 = ['j', 'k', 'l'];

const array5 = array1.customConcat(array2, array3, array4);
console.log(array5)
