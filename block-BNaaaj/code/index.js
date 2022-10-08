const os = require("os");
const fs = require("fs");

console.log("Welcome to Nodejs");

console.log(os.cpus().length);

console.log(os.freemem());

console.log(os.uptime());

let buffer1 = Buffer.alloc(12);

let buffer2 = Buffer.allocUnsafe(12);

buffer1.write("Node Js Assignment 1");
console.log(buffer1.toString());

//blocking code
fs.readFileSync("./app.js");

//non-blocking code
fs.readFile("./app.js", (err, content) => {
    console.log(err, content.toString());
});