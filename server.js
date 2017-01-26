/////// EXPRESS.JS ////////

var express = require('express');
var app = express();
var host = 'localhost';
app.set('port', process.env.PORT || 3000)
var router = require('./app/routes/routes');
app.use('/', router);

// Set static files (css, images, js, etc)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(app.get('port'), () => {
	console.log(`App started @ ${host}:${app.get('port')}`);
});


