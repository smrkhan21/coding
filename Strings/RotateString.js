// Problem 11. Rotate a string left or right by a given number of positions.

/*
    abcde rotate it right by 2 postion
    output: cdeab

    abcde rotate it left by 2 position (abcdeabcde)  
    output: deabc
*/

function rotate(inputString, position, rotation) {
    if(!inputString || inputString.length === 1) {
        return inputString
    }

    if(rotation == "right") {
        var result = inputString + inputString;
        result = result.slice(position, inputString.length+position)
    } else {
        var result = inputString + inputString;
        result = result.substr(inputString.length - position, inputString.length)
    }
    return result
}

console.log(rotate("abcde", 2, "right"))
console.log(rotate("acd", 2, "left"))