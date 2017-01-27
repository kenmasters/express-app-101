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

router.get('/services', (req, res) => {
	res.render('pages/services');
});

router.get('/contact', (req, res) => {
	res.render('pages/contact');
});

router.get('/full-width', (req, res) => {
	res.render('pages/full-width');
});

router.get('/blog-home-1', (req, res) => {
	res.render('pages/blog-home-1');
});

router.get('/blog-home-2', (req, res) => {
	res.render('pages/blog-home-2');
});

router.get('/blog-post', (req, res) => {
	res.render('pages/blog-post');
});

router.get('/pricing', (req, res) => {
	res.render('pages/pricing');
});

router.get('/portfolio-1-col', (req, res) => {
	res.render('pages/portfolio-1-col');
});

router.get('/portfolio-2-col', (req, res) => {
	res.render('pages/portfolio-2-col');
});

router.get('/portfolio-3-col', (req, res) => {
	res.render('pages/portfolio-3-col');
});

router.get('/portfolio-4-col', (req, res) => {
	res.render('pages/portfolio-4-col');
});

router.get('/portfolio-item', (req, res) => {
	res.render('pages/portfolio-item');
});

router.get('/faq', (req, res) => {
	res.render('pages/faq');
});

router.get('/sidebar', (req, res) => {
	res.render('pages/sidebar');
});

router.get('/404', (req, res) => {
	res.render('pages/404');
});

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