// Problem: Find the longest common prefix of an array of strings.

// input : code, coding, coders, codazone, codying
// output : cod (is longest common prefix)

function longestCommonPrefix(input) {
    var fi = input[0];
    if (!input.length) return '';

    for(let i = 0; i<fi.length; i++) {
        if(!input.every((item) => item[i] == fi[i])) {
            console.log(fi.slice(0,i));
            return;
        }
    }

    console.log(fi[0]);
    return;
}

longestCommonPrefix(["code", "coding", "coders", "codazone", "codying", "codinff"])
