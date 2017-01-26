/////// EXPRESS.JS ////////

var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars'); // require express-handlebars module
var app = express();
var host = 'localhost';
var router = require('./app/routes/routes');
var options = { dotfiles: 'ignore', etag: false,
extensions: ['htm', 'html'],
index: false
};
app.set('port', process.env.PORT || 3000);

app.use('/', router);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static files (css, images, js, etc)
app.use(express.static(path.join(__dirname, 'public'), options ));

// start the server
app.listen(app.get('port'), () => {
	console.log(`App started @ ${host}:${app.get('port')}`);
});