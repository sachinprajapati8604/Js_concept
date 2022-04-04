//normal way
function sum(a,b,c){
    return a+b+c;
}
console.log("Normal function : ",sum(1,2,3))


// function curring
function sum1(a){
    return(b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log("Curring",sum1(4)(5)(6))

//es6---->ECAM script version we can write only one simple line

const sum2=(a)=>(b)=>(c)=>a+b+c;
const res=sum2(10)(20)(30);
console.log("ECMA version" , res)

