// Problem: Check if two strings are anagrams.

/*
    Input : s = listen, t = silent
    is s==t => true
*/

function checkAnagram(s, t) {
    const obj1 = {};
    const obj2 = {};

    for(const item of s) {
        if(obj1.hasOwnProperty(item)) {
            obj1[item]++;
        } else {
            obj1[item] = 1;
        }
    }

    for(const item of t) {
        if(obj1.hasOwnProperty(item)) {
            obj1[item] = obj1[item]-1;
        }
    }

    for(const item in obj1) {
        if(obj1[item] !== 0 ) {
            console.log(false)
            return
        }
    }

    console.log(true)
}

checkAnagram('listen', 'silent')