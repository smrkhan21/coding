// Problem : Check if a string is a palindrome
/*
    What is Palindrome?

    Ex : madam, 1221 etc.

    A palindrome is a word, phrase, number, or other sequence of characters that reads 
    the same forward and backward. In other words, it remains unchanged when its characters are reversed.

    Here are some examples of palindromes:
    "racecar"
    "madam"
    "deified"
    "12321"
*/

function isPalindrome(input) {
    let reversedValue = ""
    for (var i = input.length - 1; i >= 0; i--) {
        reversedValue += input[i]
    }
    if (reversedValue === input) {
        return true
    }
    return false
}

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("madam")) // true
console.log(isPalindrome("palindrome")) // false
console.log(isPalindrome("number")) // false
console.log(isPalindrome("12321")) // true