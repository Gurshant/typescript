"use strict";
function add(n1, n2) {
    return n1 + n2;
}
var arr = process.argv.slice(2);
console.log(add(+arr[0], +arr[1]));
