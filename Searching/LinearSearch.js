// 37. Implement linear search in an array.

function linearSearch(arr, targetValue) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === targetValue) {
            return i;
        }
    }
    return -1;
}

const myList = [4, 7, 2, 9, 1, 5];
const targetValue = 2;

const result = linearSearch(myList, targetValue);

if (result !== -1) {
  console.log(`Target value ${targetValue} found at index ${result}`);
} else {
  console.log(`Target value ${targetValue} not found in the list`);
}