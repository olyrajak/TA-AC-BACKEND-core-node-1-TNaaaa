// Q. write code to create a node server 
// - add listener on port 5555
// - console request headers
// - respond with content of user-agent from request headers.

var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    console.log(request.headers);
    response.end(request.headers["user-agent"]);

}
server.listen(5555, () => {
    console.log("Server is Running on port 5555");
});