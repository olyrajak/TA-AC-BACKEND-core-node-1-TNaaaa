// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`


var http = require('http');
var server = http.createServer(handlerRequest);
var url = require('url');


function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'POST' && pathurl === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Posted for first time</h2>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }

}
server.listen(5050, () => {
    console.log("server listening on port 5050");
});