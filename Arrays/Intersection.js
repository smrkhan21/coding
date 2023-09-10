// Problem: Find the intersection of two arrays.

/*
    arr1 = [1,2,3,4]
    arr2 = [5,6,4,5]

    output = [4]
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

function intersection(arr1, arr2) {
    const result = []
    var arr1 = removeDuplicates(arr1);
    var arr2 = removeDuplicates(arr2);

    arr1.forEach((item) => {
        if(arr2.includes(item)) {
            result.push(item)
        }
    })

    return result;

}

console.log(intersection([1,2,3,4], [5,6,4,5]))