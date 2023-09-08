// Problem: Implement string compression (e.g., "aabcccccaaa" -> "a2b1c5a3").

function compressString(input) {
    let compressed = "";
    let count = 1;

    for(let i = 0; i<input.length; i++) {
        if(input[i] === input[i+1]) {
            count++;
        } else {
            compressed += input[i] + count;
            count = 1;
        }
    }

    // Check if the compressed string is shorter than the original
    if (compressed.length < input.length) {
        console.log(compressed)
    } else {
        console.log(input)
    }
}

compressString("aabcccccaaa");



/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var compressed = [];
    var count = 1;

    for(let i = 0; i<chars.length; i++) {
        if(chars[i] === chars[i+1]) {
            count++;
        } else {
            compressed.push(chars[i])
            compressed.push(String(count))
            count = 1;
        }
    }
    // Check if the compressed string is shorter than the original
    if (compressed.length < chars.length) {
        return compressed
    } else {
        return chars
    }
};

console.log(compress(["a","a","b","b","c","c","c"]));