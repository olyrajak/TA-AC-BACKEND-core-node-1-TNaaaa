var http = require('http');
var server = http.createServer((request, response) => {
    console.log("Server Request:", request);
    console.log("Local Server");
    console.log("Server Response:", response);
    response.end("Welcome Node");

});

server.listen(4000, 'localhost', () => {
    console.log("Server is listen on port 4000");
});