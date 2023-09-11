// Problem: Implement a function to rotate an array left or right.

/*
    arr1 = [1,2,3,4]
    rotate by 2 postion right
    output = [3,4,1,2]
*/

function rotateArray(inputArray, position, side) {
    const newArray = [...inputArray, ...inputArray];
    console.log(newArray.slice(position, inputArray.length+position))
}

rotateArray([1,2,3,4], 2, "right")