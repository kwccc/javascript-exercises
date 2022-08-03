const removeFromArray = function(arr, elem1, elem2) {
    const args = [...arguments]
    
    for (let i = 1; i < arguments.length; i++) {
        if (arr.includes(args[i])) {
            arr.splice(arr.indexOf(args[i]),1)
        }
    }
    
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
