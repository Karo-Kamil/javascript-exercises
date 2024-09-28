const palindromes = function (a) {
    let cleanedString = (a.replace(/[^a-zA-Z0-9]/g, "")).toLowerCase();
    let reversed = "";
    for (let i = 1; i <= cleanedString.length; i++) {
        reversed += cleanedString.at(-i);
    }
    //let splitStr = cleanedString.split("");
    //let reversedSplit = splitStr.reverse();
    //let cleanString = splitStr.join("");
    //let reversed = reversedSplit.join("");
    //console.log(cleanString + " " + reversed);
    return cleanedString === reversed;

};

// Do not edit below this line
module.exports = palindromes;
