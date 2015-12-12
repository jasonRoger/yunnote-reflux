var express = require('express');
var router = express.Router();

function checkNotLogin(req, res, next) {
	if(req.session.username) {
		res.redirect('/index');
	}else {
		next();
	}
}

router.get('/login', checkNotLogin);

router.get("/", function(req, res, next) {
	res.render("login", {title: "云笔记"})
});

module.exports = router;
