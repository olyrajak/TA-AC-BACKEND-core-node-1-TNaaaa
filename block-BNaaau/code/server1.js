// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object
var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    console.log(request, response);

}
server.listen(5000, () => {
    console.log("Server is Running on port 5000");
});