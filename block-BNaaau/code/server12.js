// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

var http = require('http');
var server = http.createServer(handlerRequest);
var url = require('url');


function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'GET' && pathurl === '/users') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
            "<form action='/users' method='POST'><input type='text' name='name' placeholder='Enter Name'><input type='email' name='email' placeholder='Enter Email'><button>Submit</button></form>"
        );
    } else if (req.method === 'POST' && pathurl === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Posted for the second time');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }

}
server.listen(4444, () => {
    console.log("server listening on port 4444");
});