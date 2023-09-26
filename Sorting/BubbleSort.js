// Implement Bubble Sort

/*

*/

var bubbleSort = function(unsortedArray) {
    let n = unsortedArray.length;
    let swapped;

    for(let i = 0; i<n-1; i++) {
        swapped = false;
        for(let j = 0; j < n-i-1; j++) {
            if(unsortedArray[j] > unsortedArray[j+1]) {
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j+1]
                unsortedArray[j + 1] = temp
            }
        }
    }

    return unsortedArray;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted array:", sortedArray);