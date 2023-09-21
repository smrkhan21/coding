/*
The flat() method concatenates sub-array elements.

array.flat(depth)

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

ouput: [1,2,3,4,5,6]

*/

Array.prototype.customFlat = function(depth = Infinity) {
    if(depth === 0) {
        return this.slice()
    }

    var result = []

    for(let i = 0; i<this.length; i++) {
        if(Array.isArray(this[i])) {
            result = result.concat(this[i].customFlat(depth - 1))
        } else{
            result.push(this[i])
        }
    }

    return result;
}

const myArr = [[1,2],[3,4],[5,6],[7,[8,[9,[10]]]]];
const newArr = myArr.customFlat();

console.log(newArr)