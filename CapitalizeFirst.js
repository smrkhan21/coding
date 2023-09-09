// Problem: Capitalize the first letter of each word in a string.

/*
    Input: My name is Dell
    Outpuut: My Name Is Dell
 */

function capitalizeFirst(input) {
    const inputArray = input.split(/\s+/)

    for(let i = 0; i<inputArray.length; i++) {
        inputArray[i] = inputArray[i][0].toUpperCase() + inputArray[i].slice(1)
    }

    let output = inputArray.join(" ");
    console.log(output);
}

capitalizeFirst("My name is Dell");
capitalizeFirst("Capitalize the first letter of each word in a string");
capitalizeFirst("Lorem ipsum text for converting first character of each string to uppercase");