var express = require('express');
var router = express.Router();
var comm = require('../models/common.js');

function checkLogin(req, res, next) {
	if(!req.session.username) {
		res.redirect('/login');
	}else {
		next();
	}
}
router.get('/', checkLogin);

router.get("/", function(req, res, next) {
	var data = {
		title: '足迹屋，记录生活的点点滴滴',
		verions: comm.getVersion()
	}
	res.render("index", data);
});

module.exports = router;
