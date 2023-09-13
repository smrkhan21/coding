// 22. Check if an array contains a subarray with a given sum.\\
// Sliding window technique
/*

const arr = [1, 2, 3, 4, 5];
const targetSum = 9;
output: index 1 to 3
*/

function arraySum(inputArray, targetSum) {
    let currentSum = inputArray[0];
    let start = 0;

    for(let end = 1; end<=inputArray.length; end++) {
        if(currentSum === targetSum) return true;

        if(currentSum < targetSum) {
            currentSum += inputArray[end]
        } else if(currentSum > targetSum && start < end - 1) {
            currentSum -= inputArray[start]
            start++
        }
    }

    return false;
}

console.log(arraySum([1, 2, 3, 4, 5], 9))