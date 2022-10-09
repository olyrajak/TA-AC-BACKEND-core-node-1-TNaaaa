var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(parseurl);
    console.log(req.method, req.url, parseurl.pathname);
    if (req.method === 'GET' && pathurl === '/file') {
        res.setHeader('content-type', 'text/html');
        fs.readFile('./node.html', (err, content) => {
            if (err) {
                res.end(err);
                // console.log(err);
            } else {
                res.end(content);

                // console.log(content);


            }
        });
    } else if (req.method === 'GET' && pathurl === '/stream') {
        res.setHeader('content-type', 'text/html');
        fs.createReadStream('./node.html').pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('</h1>Page Not Found</h1>');
    }

}
server.listen(5555, () => {
    console.log("Server is listen on port 5555");
});