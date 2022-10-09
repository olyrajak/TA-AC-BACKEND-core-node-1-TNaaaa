// Q. create a server
// - add a listener on port 3333
// - set status code 202 in response using `res.statusCode`.

// esponse.StatusCode = 200;

var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    response.StatusCode = 202;
    response.end("My first server in NodeJS");

}
server.listen(3333, () => {
    console.log("server listening on port 3333");
});