function revString(input) {
    let str = input
    let revString = ""
    for(var i = str.length - 1; i>=0; i--) {
        revString += str[i]
    }
    return revString;
}
console.log(revString("Sameer"));