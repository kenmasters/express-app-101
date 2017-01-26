var express = require('express');
var app = express();
var port = 8080;

// start the server
app.listen(port, (req, res) => {
	console.log('Server running @ http://localhost:'+port)
});


// App routes 

// route for index
app.get('/', (req, res) => {
	res.send('Hello world');
});

// route for about
app.get('/about', (req, res) => {
	res.send('about');
});

// route for contact
app.get('/contact', (req, res) => {
	res.send('contact');
});

app.post('/contact', (req, res) => {
	res.send('post contact');
});