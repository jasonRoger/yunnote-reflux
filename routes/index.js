var express = require('express'),
	fs = require('fs'),
	session = require('express-session'),
	MongoStore = require('connect-mongo')(session),
	router = express.Router(),
	userController = require('../models/user.js'),
	navController = require("../models/nav.js"),
	fileController = require('../models/file.js'),
	codeController = require('../models/code.js'),
	bodyParser = require('body-parser'),
	connect = require('connect'),
	assign = require('object-assign');
	multer  = require('multer'),
	upload = multer({ dest: 'public/uploads/pdf/' }),
	async = require('async'),
	config = require("../config.js");
var systemProfile = fs.readFileSync(__dirname + '/../public/editormd/default.md', 'utf-8');

module.exports = function(app) {
	//app.use(bodyParser.urlencoded({ extended: false }));

	app.use(session({
		secret: config.cookieSecret,
		key: config.DBNAME,
		cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
		resave: true,
  		saveUninitialized: true,
		store: new MongoStore({
			db: config.DBNAME,
			host: config.HOSTNAME,
			port: config.PORT
		})
	}));

	app.get('/index', checkLogin);
	app.get("/index", function(req, res, next) {
		res.render("index", {title: "云笔记"})
	});
	app.get("/", function(req, res, next) {
		res.redirect('/index');
	});
	app.get('/login', checkNotLogin);
	app.get("/login", function(req, res, next) {
		res.render("login", {title: "云笔记"})
	});

	app.get("/reg", function(req, res, next) {
		res.render("reg", {title: "云笔记"})
	});

	app.post("/api/checkLogin.json", function(req, res, next) {
		var baseParams = {
			username: req.body.username,
			password: req.body.password
		}

		userController.checkLogin(baseParams, function(data) {
			if(data.ret) req.session.username = req.body.username
			res.send(data);
		});
	});

	app.post("/api/addUser.json", function(req, res, next) {
		var baseParams = {
			username: req.body.username,
			password: req.body.password
		}

		userController.add(baseParams, function(data) {
			if(!data.ret) return res.send(data);
			var defaultNav = {
				name: "系统介绍",
				sort: 1,
				author: req.body.username
			}
			navController.add(defaultNav, function(data) {
				if(!data.ret) return res.send(data);
				var firstMarkDown = {
						level: 1,
						type: 'markdown',
						pid: data.data.id,
						name: "系统使用说明",
						author: req.body.username,
						sort: 1,
						size: 0,
						detail: systemProfile
					}

				fileController.add(firstMarkDown, function(data) {
					res.send(data);
				});
			});
		});
	});

	app.get("/api/navList.json", function(req, res, next) {
		var params = {
			author: req.session.username
		};
		navController.getAll(params, function(data) {
			res.send(data);
		});
	});

	app.get("/api/pathList.json", function(req, res, next) {
		var params = {},
			level = req.query.level,
			pathList = [],
			id = req.query.id;

		getPath();
		function getPath() {
			if(level == 0){
				navController.getOne({_id: id}, function(data) {
					pathList.unshift(data.data);
					res.send({
						ret: true,
						errmsg: "",
						data: pathList
					});
				});
				return;
			}
			fileController.getOne({_id: id}, function(data) {
				pathList.unshift(data.data);
				level--;
				id = data.data.pid;
				getPath();
			});
		}
	});

	app.get("/api/addNav.json", function(req, res, next) {

		navController.checkExist({name: req.query.theme, author: req.session.username}, function(data) {
			if(!data.ret) return res.send(data);

			navController.getMaxSort({author: req.session.username}, function(data) {
				if(!data.ret) return res.send(data);

				var newNav = {
					name: req.query.theme,
					sort: data.data.sort + 1,
					author: req.session.username
				}

				navController.add(newNav, function(data) {
					res.send(data);
				});
			});
		});
	});

	app.get("/api/updateNav.json", function(req, res, next) {
		navController.checkExist({name: req.query.theme, author: req.session.username}, function(data) {
			if(!data.ret) return res.send(data);

			var newNav = { name: req.query.theme }

			navController.update({_id: req.query.id}, newNav, function(data) {
				res.send(data);
			});
		});
	});

	app.get("/api/deleteNav.json", function(req, res, next) {

		navController.remove({_id: req.query.id}, function(data) {
			res.send(data);
		});
	});

	app.get("/api/fileList.json", function(req, res, next) {
		var params = {
			pid: req.query.pid,
			level: req.query.level,
			author: req.session.username
		};

		fileController.getAll(params, function(data) {
			res.send(data);
		});
	});

	app.get("/api/getWord.json", function(req, res, next) {

		fileController.getOne({_id: req.query.id}, function(data) {
			res.send(data);
		});
	});

	app.post("/api/addFolder.json", function(req, res, next) {

		var baseParams = {
			level: req.body.level,
			pid: req.body.pid,
			author: req.session.username
		}

		fileController.checkExist(assign({type: req.body.type, name: req.body.name}, baseParams), function(data) {
			if(!data.ret) return res.send(data);

			fileController.getMaxSort(baseParams, function(data) {
				if(!data.ret) return res.send(data);

				var newData = assign(baseParams,{
					type: req.body.type,
					name: req.body.name,
					sort: data.data.sort + 1,
					size: req.file ? req.file.size : 0,
					detail: req.body.detail ? req.body.detail : req.file ? req.file.path : ""
				});

				fileController.add(newData, function(data) {
					res.send(data);
				});
			});
		});
	});

	app.post("/api/addFile.json", upload.single('pdfFile'), function(req, res, next) {

		var baseParams = {
			level: req.body.level,
			pid: req.body.pid,
			author: req.session.username
		}

		fileController.checkExist(assign({type: req.body.type, name: req.body.name}, baseParams), function(data) {
			if(!data.ret) return res.send(data);

			fileController.getMaxSort(baseParams, function(data) {
				if(!data.ret) return res.send(data);

				var newData = assign(baseParams,{
					type: req.body.type,
					name: req.body.name,
					sort: data.data.sort + 1,
					size: req.file ? req.file.size : 0,
					detail: req.body.detail ? req.body.detail : req.file ? req.file.path : ""
				});

				fileController.add(newData, function(data) {
					res.send(data);
				});
			});
		});
	});

	app.post("/api/updateFile.json", function(req, res, next) {
		var newFile = {
				name: req.body.name,
				detail: req.body.detail ? req.body.detail : ""
	    	}

	    fileController.update({_id: req.body.id}, newFile, function(data) {
			if(req.body.type && req.body.type == "code") {
				codeController.update({pid: req.body.id}, {name: req.body.name}, function(data) {
					res.send(data);
				});
		    }else {
		    	res.send(data);
		    }
		});
	});

	app.get("/api/deleteFile.json", function(req, res, next) {

		fileController.remove({_id: req.query.id}, function(data) {
			if(req.query.type == "code") {
				codeController.remove({pid: req.query.id}, function(data) {
					res.send(data);
				});
			}else {
				res.send(data);
			}
		});
	});

	app.post("/api/addCode.json", function(req, res, next) {

		var baseParams = {
			level: req.body.level,
			pid: req.body.pid,
			author: req.session.username
		}

		fileController.checkExist(assign({type: req.body.type, name: req.body.name}, baseParams), function(data) {
			if(!data.ret) return res.send(data);

			fileController.getMaxSort(baseParams, function(data) {
				if(!data.ret) return res.send(data);

				var newData = assign(baseParams,{
					type: req.body.type,
					name: req.body.name,
					sort: data.data.sort + 1,
					size: 0,
					detail: ""
				});

				fileController.add(newData, function(data) {
					if(!data.ret) return res.send(data);

					var codeData = {
						pid: data.data.id,
						level: req.body.level,
						name: req.body.name,
						codeHtml: req.body.codeHtml,
						codeCss: req.body.codeCss,
						codeJs: req.body.codeJs,
						author: req.session.username
					}
					codeController.add(codeData, function(data) {
						res.send(data);
					});
				});
			});
		});
	});

	app.get("/api/getCode.json", function(req, res, next) {

		codeController.getOne({pid: req.query.id}, function(data) {
			res.send(data);
		});
	});

	app.post("/api/updateCode.json", function(req, res, next) {

		var newFile = {
				name: req.body.name,
				detail: ""
	    	}

		fileController.update({_id: req.body.id}, newFile, function(data) {
			if(!data.ret) return res.send(data);

			var codeData = {
				name: req.body.name,
				codeHtml: req.body.codeHtml,
				codeCss: req.body.codeCss,
				codeJs: req.body.codeJs
			}
			codeController.update({pid: req.body.id}, codeData, function(data) {
				res.send(data);
			});
		});
	});

	function checkLogin(req, res, next) {
		if(!req.session.username) {
			res.redirect('/login');
		}
		next();
	}
	function checkNotLogin(req, res, next) {
		if(req.session.username) {
			res.redirect('/index');
		}
		next();
	}
}
