//  Problem: Remove duplicates from an array

/*
    input: [1,2,3,1,4,2]
    output: [1,2,3,4]
*/

function removeDuplicates(inputArray) {
    const result = []
    inputArray.forEach((item) => {
        if(!result.includes(item)) {
            result.push(item)
        }
    })

    return result
}

console.log(removeDuplicates([1,2,3,1,4,2]))
console.log(removeDuplicates([1,1,1,1,1]))
console.log(removeDuplicates([9,1,6,9,5]))
console.log(removeDuplicates([7,7,8,5,0,0]))
