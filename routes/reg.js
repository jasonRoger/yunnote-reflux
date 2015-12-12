var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
	res.render("reg", {title: "云笔记"})
});

module.exports = router;
