const Student={
    fname:"Sachin",
    lname:"Prajapati",
    
}
// fullname fun can be used in both object 
function fullname(prefix,suffix){
    console.log(prefix,this.fname,this.lname, suffix);
}

fullname.call(Student,"MR." ,"How are you ?")  //call function with arguments

fullname.apply(Student,["Mr.","How are you ?"])   //apply method 

let fn=fullname.bind(Student);   // bind method
// console.log(fn)
fn("A","B")

const Employee={
    fname:"Vinay",
    lname:"Verma",
  
}

fullname.call(Employee,"Mr.","How are you ?")
fullname.apply(Employee,["Mr.","How are you ?"])



