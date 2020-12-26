"use strict";
var person = {
    name: 'Jon',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // TUPLE, sets initial array length and the types for first 2
    role: [2, 'author']
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
    // ERROR: caught
    // console.log(hobby.map());
}
// ERROR: caught
// person.role[1]=20;
// Typescript cannot catch this error
person.role.push('admin');
