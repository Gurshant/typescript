"use strict";
function combine(x, y, resultConversion) {
    var result;
    if (resultConversion === 'number' || typeof x === 'number' && typeof y === 'number') {
        result = +x + +y;
    }
    else {
        result = x.toString() + y;
    }
    return result;
}
console.log(combine(20, 10, 'number'));
console.log(combine('Jon', ' Snow', 'text'));
console.log(combine('Jon', ' Snow', 'number'));
