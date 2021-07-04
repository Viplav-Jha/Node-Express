// local dependency - use it only in this projectId
// npm i <packagenme>
 
//global dependency - use it in any project that
// npm install -g <packagenamme>
 
//Package.json 
// npm init
// npm init -y 

const _ = require("lodash")

const items =[1,[2,[3,[4]]]] 
const newIteam =  _.flattenDeep(items) 
console.log(newIteam);