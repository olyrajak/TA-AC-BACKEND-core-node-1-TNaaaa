var http = require('http');
var server = http.createServer(handlerRequest);

function handlerRequest(req, res) {
    console.log(req.method, req.url);
    res.writeHead(201, { "Content-Type": "text/html" });
    res.end("<h1>Welcome Response Object Assign Block 4</h1>");
}
server.listen(4444, () => {
    console.log("Server is Running on port 4444");
});