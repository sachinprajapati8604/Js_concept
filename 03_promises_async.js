// let fs=require('fs');
let fs = require('fs/promises');

const readThree = async (file1, file2, file3) => {
    let a1 = fs.readFile(file1, 'utf-8');
    let a2 = fs.readFile(file2, 'utf-8');
    let a3 = fs.readFile(file3, 'utf-8');

    let c1 = await a1;
    console.log(c1);
    let c2 = await a2;
    console.log(c2);
    let c3 = await a3;
    console.log(c3)

}
readThree('file1.txt','file2.txt','file3.txt');


//2nd example

let a = fs.readFile("File.txt", 'utf-8')

// console.log(a)    // show me pending state 

//return the data
a.then((data) => {
    console.log(data)
})

console.log("This is end of file")
