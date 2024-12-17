// Difference between dot and bracket notation
const key = 'email'
const person = {
    name:"Salman",
    age:40,
    "person hobbie":['cricket','vollyball','coding']
}

// console.log(person['person hobbie']);

person[key] = 'salmankhan@gmail.com'
console.log(person);