// Q. write code to create a node server 
// - add listener on port 5566
// - console request url and request method
// - return a text response with requested url and method
var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    console.log(request.url);
    console.log(request.method);
    response.end(request.url + " " + request.method);

}
server.listen(5566, () => {
    console.log("Server is Running on port 5566");
});