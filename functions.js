"use strict";
function add(x, y) {
    return x + y;
}
function printResult(x) {
    console.log("Result: " + x);
}
// let combineValues: Function;
// combineValues = add;
// combineValues = printResult;
var combineValues;
combineValues = add;
// combineValues = printResult;
function addAndHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
addAndHandle(10, 20, printResult);
