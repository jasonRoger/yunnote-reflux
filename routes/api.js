var express = require('express');
var fs = require('fs');
var router = express.Router();
var assign = require('object-assign');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/pdf/' });
var userModel = require('../models/userModel.js');
var navModel = require('../models/navModel.js');
var fileModel = require('../models/fileModel.js');
var comm = require('../models/common.js');
var systemProfile = fs.readFileSync(__dirname + '/../public/editormd/systemProfile.md', 'utf-8');

router.post('/addUser.json', function(req, res, next) {
	userModel.checkExist({username: req.body.username}, function(data) {
		if(!data.ret) return res.send(data);
		var baseParams = {
			username: req.body.username,
			password: req.body.password,
			createTime: null
		}
		userModel.add(baseParams, function(data) {
			if(!data.ret) return res.send(data);
			var defaultNav = {
				name: "系统介绍",
				sort: 1,
				author: req.body.username,
				createTime: null
			}
			navModel.add(defaultNav, function(data) {
				if(!data.ret) return res.send(data);

				var firstMarkDown = {
						level: 1,
						type: 'markdown',
						pid: data.data.id,
						name: "系统使用说明",
						author: req.body.username,
						sort: 1,
						size: 0,
						detail: systemProfile,
						createTime: null
					}

				fileModel.add(firstMarkDown, function(data) {
					res.send(data);
				});
			});
		});
	});
});

router.post("/updateUser.json", function(req, res, next) {
	userModel.checkPassword({username: req.session.username, password: req.body.oldPassword}, function(data) {
		if(!data.ret) return res.send(data);

		userModel.update({username: req.session.username}, { password: req.body.password }, function(data) {
			res.send(data);
		});
	});
});

router.post("/checkLogin.json", function(req, res, next) {
	var baseParams = {
		username: req.body.username,
		password: req.body.password
	}

	userModel.checkLogin(baseParams, function(data) {
		if(data.ret) req.session.username = req.body.username
		res.send(data);
	});
});

router.get('/addNav.json', function(req, res, next) {
	navModel.checkExist({name: req.query.theme, author: req.session.username}, function(data) {
		if(!data.ret) return res.send(data);
		navModel.getMaxSort({author: req.session.username}, function(data) {
			if(!data.ret) return res.send(data);
			var newNav = {
				name: req.query.theme,
				sort: data.data.sort ? data.data.sort + 1 : 1,
				author: req.session.username,
				createTime: null
			}
			navModel.add(newNav, function(data) {
				res.send(data);
			});
		});
	});
});

router.get('/updateNav.json', function(req, res, next) {
	navModel.checkExist({name: req.query.theme, author: req.session.username}, function(data) {
		if(!data.ret) return res.send(data);
		var newNav = { name: req.query.theme };

		navModel.update({id: req.query.id}, newNav, function(data) {
			res.send(data);
		});
	});
});

router.get('/deleteNav.json', function(req, res, next) {
	navModel.remove({id: req.query.id}, function(data) {
		res.send(data);
	});
});

router.post("/addFile.json", upload.single('pdfFile'), function(req, res, next) {
	var baseParams = {
		level: req.body.level,
		pid: req.body.pid,
		author: req.session.username
	}

	fileModel.checkExist(assign({type: req.body.type, name: req.body.name}, baseParams), function(data) {
		if(!data.ret) return res.send(data);

		fileModel.getMaxSort(baseParams, function(data) {
			if(!data.ret) return res.send(data);

			var newData = assign(baseParams,{
				type: req.body.type,
				name: req.body.name,
				sort: data.data.sort ? data.data.sort + 1 : 1,
				size: req.file ? req.file.size : 0,
				detail: req.body.detail ? req.body.detail : req.file ? req.file.path : '',
				codeHtml: req.body.codeHtml || '',
				codeCss: req.body.codeCss || '',
				codeJs: req.body.codeJs || ''
			});

			fileModel.add(newData, function(data) {
				res.send(data);
			});
		});
	});
});

router.post("/updateFile.json", function(req, res, next) {
	var newFile = {
			name: req.body.name,
			detail: req.body.detail ? req.body.detail : "",
			codeHtml: req.body.codeHtml || '',
			codeCss: req.body.codeCss || '',
			codeJs: req.body.codeJs || ''
    	}

    fileModel.update({id: req.body.id}, newFile, function(data) {
		res.send(data);
	});
});

router.get("/deleteFile.json", function(req, res, next) {
	fileModel.remove({id: req.query.id}, function(data) {
		res.send(data);
	});
});

module.exports = router;