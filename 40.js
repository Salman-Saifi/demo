// Spread operator in array
// const array1 =[1,2,3];
// const array2 =[4,5,6];

// const newArr = [...array1,...array2]
// const newArr = [..."1234567"]
// console.log(newArr);

// Spread operator in objects

const obj1 ={
    key1:"value1",
    key2:"value2"
};

const obj2 ={
    key3:"value3",
    key4:"value4"
};

// const newobj = {...obj1,...obj2};
// const newobj = {...obj1,...obj2,key69:"value69"};

// const newobj = {..."abc"};
const newobj = {...['item1','item2']};

console.log(newobj);


