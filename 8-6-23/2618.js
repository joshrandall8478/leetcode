/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */



var checkIfInstanceOf = (obj, classFunction) => {
    if(classFunction.name !== undefined){
        if (typeof obj === classFunction.name.toLowerCase()) {
            return true;
        }
    }
    if (classFunction === Object){
        return true;
    }
    return obj instanceof classFunction;
};


console.log(checkIfInstanceOf(5n, Object));
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */