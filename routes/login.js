var express = require('express');
var router = express.Router();
var comm = require('../models/common.js');

function checkNotLogin(req, res, next) {
	if(req.session.username) {
		res.redirect('/index');
	}else {
		next();
	}
}

router.get('/login', checkNotLogin);

router.get("/", function(req, res, next) {
	var data = {
		title: '足迹屋，记录生活的点点滴滴',
		verions: comm.getVersion()
	}
	res.render("login", data);
});

module.exports = router;
