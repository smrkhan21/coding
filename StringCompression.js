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
