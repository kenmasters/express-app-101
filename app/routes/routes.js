// require express
var express = require('express');
var path 	= require('path');

// Create our router object
var router = express.Router();

// export our router
module.exports = router;

router.get('/', (req, res) => {
	// res.send('May Node be with you.')
	res.sendFile(path.join(__dirname, '../../index.html'));
});
router.get('/about', (req, res) => {
	res.send('About page')
});
router.get('/contact', (req, res) => {});
router.post('/contact', (req, res) => {});