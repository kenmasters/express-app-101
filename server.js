/////// EXPRESS.JS ////////

var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars'); // require express-handlebars module
var bodyParser = require('body-parser'); // require body-parser module
var app = express();
var host = 'localhost';
var router = require('./app/routes/routes');
var options = { 
	dotfiles: 'ignore', 
	etag: false,
	extensions: ['htm', 'html'],
	index: false
};

// Set port dynamically
app.set('port', process.env.PORT || 3000);

// Set app template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static files (css, images, js, etc)
app.use(express.static(path.join(__dirname, 'public'), options ));

// Because you're the type of developer who cares about this sort of thing!
app.enable('strict routing');

// Application routes
app.use('/', router);


// start the server
app.listen(app.get('port'), () => {
	console.log(`Server started at http://${host}:${app.get('port')}`);
});