// Problem: Check if a string contains only digits.

function isNumber(inputString) {
    let regex = /\D/;
    if(!regex.test(inputString)) {
        return true
    }
    return false;
}
console.log(isNumber("Sameer"))