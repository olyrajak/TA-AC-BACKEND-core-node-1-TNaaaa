var http = require('http');


var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    console.log(req.headers);
    console.log(req.method, req.url);
    res.end();
}
server.listen(3000, 'localhost', () => {
    console.log("Server is listen on port 3000");
});