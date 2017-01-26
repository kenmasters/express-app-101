/**
 * This is a nodejs web server
 */

// import http module
var http = require('http');

// handle sending requests and returning responses
handleRequests = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('May Node.js be with you.');
}

// create the server
var server = http.createServer(handleRequests);

// start the server and listen to port N.
server.listen(8080, () => {
	console.log('Server running at http://localhost:8080')
})