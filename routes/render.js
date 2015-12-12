var express = require('express');
var router = express.Router();
var navModel = require('../models/navModel.js');
var fileModel = require('../models/fileModel.js');
var comm = require('../models/common.js');

router.get('/navList.json', function(req, res, next) {
	var params = {
			author: req.session.username
		};
	navModel.getAll(params, function(data) {
		var level = req.query.level,
			id = req.query.id,
			navData = {};

		navData = {
			ret: data.ret,
			errmsg: data.errmsg,
			data: {
				isIdExist: false,
				list: data.data
			}
		};

		if(!navData.ret || navData.ret && (!id || typeof level == 'undefined')) return res.send(navData);

		getPath();
		function getPath() {
			if(level == 0){
				navModel.isExist({id: id}, function(data) {
					if(!data.ret) return res.send(navData);

					var newNavList = navData.data.list.map(function(item, index) {
						item.isActived = item.id == id;
						return item;
					});
					res.send({
						ret: true,
						errmsg: "",
						data: {
							isIdExist: true,
							list: newNavList
						}
					});
				});
			}
			fileModel.isExist({id: id}, function(data) {
				if(!data.ret) {
					level = 0;
					id = 0;
					return ;
				}
				level--;
				id = data.data.pid;
				getPath();
			});
		}
	});
});

router.get('/pathList.json', function(req, res, next) {
	var level = req.query.level,
		pathList = [],
		id = req.query.id;

	getPath();
	function getPath() {
		if(level == 0){
			navModel.isExist({id: id}, function(data) {
				pathList.unshift(data.data);
				if(!data.ret) pathList = [];
				res.send({
					ret: true,
					errmsg: "",
					data: pathList
				});
			});
			return;
		}
		fileModel.isExist({id: id}, function(data) {
			if(!data.ret) {
				pathList = [];
				level = 0;
				id = 0;
				return;
			}
			pathList.unshift(data.data);
			level--;
			id = data.data.pid;
			getPath();
		});
	}
});

router.get('/fileList.json', function(req, res, next) {
	var params = {
		pid: req.query.pid,
		level: req.query.level,
		author: req.session.username
	};
	fileModel.getAll(params, function(data) {
		res.send(data);
	});
});

router.get('/getWord.json', function(req, res, next) {
	fileModel.getWord({id: req.query.id}, function(data) {
		res.send(data);
	});
});

router.get('/getCode.json', function(req, res, next) {
	fileModel.getCode({id: req.query.id}, function(data) {
		res.send(data);
	});
});

module.exports = router;