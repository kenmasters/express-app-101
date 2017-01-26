// require express
var express = require('express');
var path 	= require('path');

// Create our router object
var router = express.Router();

// export our router
module.exports = router;

router.get('/', (req, res) => {
	res.render('pages/index');

});
router.get('/about', (req, res) => {
	res.render('pages/about');
});

router.get('/contact', (req, res) => {});
router.post('/contact', (req, res) => {});

router.get('/bodie', (req, res) => {
	res.render('pages/bodie');
});

router.get('/lee', (req, res) => {
	var context = {
		town: "Lee Vining"
	};
	res.render('town', context);
});