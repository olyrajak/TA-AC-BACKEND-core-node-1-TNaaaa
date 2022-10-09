// Q. create a node server 
// - add listener on port 5100
// - respond with 'My first server in NodeJS' using response object

var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    response.end("My first server in NodeJS");

}
server.listen(5100, () => {
    console.log("Server is Running on port 5100");
});