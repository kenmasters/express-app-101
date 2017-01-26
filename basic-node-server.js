
// import http module
const http = require('http');

// handle sending requests and returning responses
function handleRequests(req, res) {
	res.end('Hello world');
}
// create the server
var server = http.createServer(handleRequests);

// start server and listen to port N
server.listen(8080, function() {
	console.log('Listening...');
})