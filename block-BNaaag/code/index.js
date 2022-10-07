var fs = require('fs');
fs.readFile('./content.md', (err, msg) => {
    console.log(err, msg.toString);
});
let fileData = fs.readFileSync("./content.md");
console.log(fileData);

let buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer");
console.log(buff1);

console.log(buff1.toString());