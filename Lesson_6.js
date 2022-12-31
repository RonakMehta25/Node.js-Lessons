//NPM Module - https://www.w3schools.com/nodejs/nodejs_npm.asp

NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.

I want to download a package called "upper-case":

npm install upper-case

NPM creates a folder named "node_modules", where the package will be placed.

How to use above package 

var uc = require('upper-case');

res.write(uc.upperCase("Hello World!"));