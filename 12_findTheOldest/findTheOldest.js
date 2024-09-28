const findTheOldest = function(a) {
    const sortedArr = a.sort((a, b) => {
        //console.log(a);
        if (a.yearOfDeath) {
            if (b.yearOfDeath) {
                return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
            } else {
                return (2024 - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
            }
        } else {
            return (b.yearOfDeath - b.yearOfBirth) - (2024 - a.yearOfBirth);
        }
        
    })
    
    return sortedArr[0];

};

// Do not edit below this line
module.exports = findTheOldest;
