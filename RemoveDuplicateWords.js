// Problem : Remove Duplicate words from a paragraph

/*
    Input - "This is a sample paragraph . This paragraph contains some duplicate words, like 'is' and ' paragraph '."
*/

function removeDuplicateWords(paragraph) {
    const words = paragraph.split(/\s+/);

    const uniqueWords = [];

    for(const word of words) {
        if(!uniqueWords.includes(word)) {
            uniqueWords.push(word)
        }
    }

    let result = uniqueWords.join(' ')
    return result
}

console.log(removeDuplicateWords("This is a This")) // This is a
console.log(removeDuplicateWords("This is a sample paragraph . This paragraph contains some duplicate words, like 'is' and ' paragraph '.")) // This is a sample paragraph . contains some duplicate words, like 'is' and 'paragraph'.