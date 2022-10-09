// Q. create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.end("<h3>Welcome to altcampus</h3>");

}
server.listen(8000, () => {
    console.log("server listening on port 8000");
});