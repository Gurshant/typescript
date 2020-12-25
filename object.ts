const person:{
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Jon',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // TUPLE, sets initial array length and the types for first 2
  role: [2, 'author']
};

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toLowerCase());
  // ERROR: caught
  // console.log(hobby.map());
}

// ERROR: caught
// person.role[1]=20;

// Typescript cannot catch this error
person.role.push('admin')