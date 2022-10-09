// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

// - parse the  request url using parse method from url module
// - console pathname from parsed url in above step
// - grab url using `req.url`
// - differentiate between `req.url` and `parsedUrl.pathname`
// - grab the email from query params
// - return json response with email from query params


var http = require('http');
var server = http.createServer(handlerRequest);
var url = require('url');


function handlerRequest(req, res) {
    let parseurl = url.parse(req.url, true);
    console.log(parseurl.pathname);
    let email = parseurl.query.email;
    res.end(JSON.stringify({ email: email }));

}
server.listen(5454, () => {
    console.log("server listening on port 5454");
});