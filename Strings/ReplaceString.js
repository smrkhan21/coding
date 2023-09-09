// Problem 10. Implement a function to replace all spaces in a string with "%20" (URL encoding).

function replaceString(inputString) {
    return inputString.replaceAll(/e/gi, "%20");
}

console.log(replaceString("Lorem Ipsum TExt Here!"))