// stock function
function convertType(value,toType){
    if (toType === 'boolean') {
        return Boolean(value);
    }
    else if (toType === 'string') {
        return String(value);
    }
    else if (toType === 'number') {
        return Number(value);
    }
}
console.log(convertType('my string', 'boolean'));

// if else ---> switch
function convertType1(value, toType) {
    switch(toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
    } 
}
console.log(convertType1('my string', 'boolean'));


// Function Expression
let convertType2 = function(value, toType) {
    
    if (toType === 'boolean') {
        return Boolean(value);
    }
    else if (toType === 'string') {
        return String(value);
    }
    else if (toType === 'number') {
        return Number(value);
    }
}
console.log(convertType('my string', 'boolean'));



//стрелочная функция

let convertType3 = (value, toType) => {
    if (toType === 'boolean') {
        return Boolean(value);
    }
    else if (toType === 'string') {
        return String(value);
    }
    else if (toType === 'number') {
        return Number(value); }
    } 