// Problem: Count the number of vowels in a string.

/*
    Input : CountVowel
    Output : 4 (o, u, o, e)
*/

function countVowel(input) {
    let count = 0
    input = input.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(const char of input) {
        if(vowels.includes(char)) {
            count++
        }
    }
    console.log(count)
}

countVowel("India"); // 3
countVowel("United States"); // 5
countVowel("Australia"); // 5