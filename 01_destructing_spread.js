/// spread operator and destructing


//use case of spread operator
const arr=[1,2,4,8];

function avg(a,b,c) {
    return a+b+c/3;
}

let a=avg(...arr);

// console.log(a)

let b=[4,7,...arr,67] // here we can unpack the array

let c=[...b];  // making copy of b array

const arr2=[12,345,67,34];

const JoinArray=[...arr,...arr2];

// console.log(JoinArray)

// console.log(b)
// console.log(c)


const obj1={
    name:"Sachin",
    age:22,
    favLang:"Java",
}

let obj2={...obj1,favLang:"Python"}

// console.log(obj2)


//use case of object destructing

let {name,age,favLang}=obj1

console.log(name,age,favLang)

