// Problem: Merge two sorted arrays into a single sorted array.

/*
    arr1 = [1,2,3,4]
    arr2 = [1,2,3]
    ouput = [1,1,2,2,3,3,4]

*/

function mergeSortedArray(arr1, arr2) {
    const result = arr1.concat(arr2);;
    result.sort((a,b) => a - b)
    return result
}

console.log(mergeSortedArray([1,2,3,4], [1,2,3]))