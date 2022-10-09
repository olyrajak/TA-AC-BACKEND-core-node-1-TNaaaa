var http = require('http');
var url = require('url');
var server = http.createServer(handlerRequest);


function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'GET' && req.url === '/') {
        res.write("Welcome to homepag");
        res.end();
    } else if (req.method === 'GET' && pathurl === '/about') {
        res.setHeader('content-type', 'text/html');
        res.end('</h2>This is all about NodeJS</h2>');
    } else if (req.method === 'POST' && pathurl === '/about') {
        const message = {
            message: 'This is a post request'
        }
        const response = JSON.stringify(message);
        res.end(response);
    } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }

}
server.listen(5000, () => {
    console.log("Server is listen on port 5000");
});