// 23. Implement a function to find the majority element in an array.

/*

A majority element in an array A[] of size n is an element that appears more than n/2 times 
(and hence there is at most one such element). 
arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
ouput = 4

arr2 = [3, 3, 4, 2, 4, 4, 2, 4]
output = no majority element
*/

function majorityElement(arr) {
    let item = null;
    let count = 0;

    for(let i = 0; i<arr.length; i++) {
        if(count === 0) {
            item = arr[i]
            count++;
        } else if(item === arr[i]) {
            count++;
        } else {
            count--;
        }
    }

    count = 0
    for(let i of arr) {
        if(i === item) {
            count++
        }
    }

    if(count > arr.length / 2) {
        return item
    } else {
        return "No Majority Element Found"
    }
}

const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
const arr2 = [3, 3, 4, 2, 4, 4, 2, 4]

console.log(majorityElement(arr))
console.log(majorityElement(arr2))