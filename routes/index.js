var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json({ message : "Welcome to My First API"});
});

router.post('/', function(req, res, next) {
	var name = req.body.name;
	if(name){
		res.json({ message : "Welcome to my first api " + name});
	} else {
		res.json({ message : "Welcome, but I don't know your name."});
	}
});

module.exports = router;
