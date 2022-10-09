// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.


var http = require('http');
var server = http.createServer(handlerRequest);
var url = require('url');


function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'GET' && pathurl === '/') {
        res.setHeader('Content-Type', 'text/plain');

        res.end('Oly Rajak');
    } else if (req.method === 'GET' && pathurl === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Oly Rajak</h2>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }

}
server.listen(2345, () => {
    console.log("server listening on port 2345");
});