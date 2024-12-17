// How to iterate object
const person = {
    name:"Salman",
    age:40,
    "person hobbie":['cricket','vollyball','coding']
} 

// for in loop
// Object.keys

// for (let key in person){
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key,":",person[key]);
// }

// console.log(typeof Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}