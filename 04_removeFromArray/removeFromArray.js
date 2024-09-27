const removeFromArray = function() {
    array = arguments[0];
    for (let j = 0; j < array.length; j++) {
        for (let i = 1; i < arguments.length; i++) {
            let item = arguments[i];
            
             if (array[j] === item) {
                array.splice(j, 1);
                j = 0;
            }
        }
       
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
