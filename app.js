// const amount =12

// if (amount < 10){
//     console.log("small number")
// }
// else{
//     console.log("medium number")
// }
// console.log("Here is my first node app")

//GLOBAL -No WINDOW

 // __dirname - path to current directory

 // __filename -file name

 //require --  function to use module(common js)

 //module -- info about current module

 // process - info about env where the program is being executes

//  console.log(__dirname)
//  setInterval(() => {
//      console.log('hello World')
//  },1000)

// Modules

// const sayHi =(name)=>{
//     console.log(`Hello there ${name}`);
// }

const names= require('./1-name.js');
const sayHi= require('./2-name.js');

sayHi(names.john)
sayHi(names.peter)

