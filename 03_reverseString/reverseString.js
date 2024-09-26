const reverseString = function(phrase) {
    let reversedString = "";
    let strLen = phrase.length;
    for (let i = 1; i <= strLen; i++) {
        reversedString += phrase.at(-i);
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
