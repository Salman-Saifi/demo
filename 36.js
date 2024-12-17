// Objects are reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create Objects
const person = {
    name:"Salman",
    age:40,
    hobbie:['cricket','vollyball','coding']
}
console.log(person);

// how to access data from objects
console.log(person['name']);
console.log(person.age);
console.log(person.hobbie);

// how to add key value pairs to objects
person.gender = 'Male'

console.log(person);