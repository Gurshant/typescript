enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'Jon',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}
 
if(person.role ===Role.ADMIN){
  console.log(person.name + ' is an admin')
}