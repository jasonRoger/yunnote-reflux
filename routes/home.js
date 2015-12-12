var express = require('express');
var router = express.Router();

function checkLogin(req, res, next) {
	if(!req.session.username) {
		res.redirect('/login');
	}else {
		next();
	}
}

router.get('/', checkLogin);

router.get("/", function(req, res, next) {
	res.render("index", {title: "云笔记"});
});

module.exports = router;
