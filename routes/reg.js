var express = require('express');
var router = express.Router();
var comm = require('../models/common.js');

/* GET users listing. */
router.get("/", function(req, res, next) {
	var data = {
		title: '足迹屋，记录生活的点点滴滴',
		verions: comm.getVersion()
	}
	res.render("reg", data);
});

module.exports = router;
