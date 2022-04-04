const a=[1,2,3,4,5,6,7]

// **********Map**************
// we can transform our array
// it does not effect the original array it return the new array
let b1=a.map((value)=>{
    return value+6;
})

console.log(b1)

//********Filter  ******* */


let b2 =a.filter((value)=>{
    return value>6
})
console.log(b2)


//******* Reduce******* */
// it return a single value
let b3=a.reduce((val1,val2)=>{
    return val1+val2;
})

console.log(b3)  //28


//how array a will be used here it will take first two value and then until last
//add 1 and 2 --->3,3,4,5,6,7
//6,4,5,6,7
//10,5,6,7
//15,6,7
//21,7
//final output--------> 28
