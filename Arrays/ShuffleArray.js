// Problem 21. Implement a function to shuffle an array randomly.

function shuffleArray(inputArray) {
    for(let i = inputArray.length-1; i>0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]]
    }

    return inputArray;
}

console.log(shuffleArray([1,2,3,4,5]))