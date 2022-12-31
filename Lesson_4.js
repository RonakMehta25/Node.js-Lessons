const fs=require('fs');

fs.appendFile('mynewfile.txt','\nHello World',function(err){

if(err) throw err;

console.log('saved!');


})