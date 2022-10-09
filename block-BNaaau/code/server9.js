// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})


var http = require('http');
var server = http.createServer(handlerRequest);


function handlerRequest(request, response) {
    const message = { success: true, message: 'Welcome to Nodejs' }
    const responseMessege = JSON.stringify(message);
    response.end(responseMessege);

}
server.listen(8888, () => {
    console.log("server listening on port 8888");
});