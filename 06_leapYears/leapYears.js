const leapYears = function(year) {
    let numYear = +year;
    if (!(numYear % 400)){
        return true;
    } else if (!(numYear % 100)) {
        return false;
    } else if (!(numYear % 4)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
