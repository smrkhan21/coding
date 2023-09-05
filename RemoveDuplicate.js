// Problem :  Remove duplicate characters from a string.

/*
    input aabccd -> output abcd
*/

function removeDuplicate(inputString) {
    var result = "";
    for(var i = 0; i<inputString.length; i++) {
        if(result.indexOf(inputString[i]) === -1) {
            result += inputString[i];
        }
    }
    return result;
}

console.log(removeDuplicate("aabccd")) // abcd
console.log(removeDuplicate("1221")) // 12
console.log(removeDuplicate("coding")) // coding
console.log(removeDuplicate("banana")) // ban