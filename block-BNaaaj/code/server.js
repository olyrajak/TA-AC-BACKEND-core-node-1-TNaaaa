const url = require("url");

let parsedUrl = url.parse(
    "https://airindia.com/fares/calculate?from=delhi&to=detroit"
);

console.log(parsedUrl);

// console query string from parsed url
console.log(parsedUrl.query);
//console pathname
console.log(parsedUrl.pathname);
//console protocol
console.log(parsedUrl.protocol);