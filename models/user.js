var mongoose = require('./db.js'),
	assign = require("object-assign"),
	util = require("util");

var userController = (function() {

	var userSchema = new mongoose.Schema({
		username: String,
		password: String,
		createTime: String,
		modifyTime: String
	}, {collection: "users"});

	var userModel = mongoose.model("user", userSchema);

	var getFormatedDate = function() {
		var nowDate = new Date();

		return nowDate.getFullYear() + "-" + (nowDate.getMonth() + 1) + "-" + nowDate.getDate()+ " " + nowDate.getHours() + ":" + (nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes());
	}

	var formatDatasHelper = function(data) {
		var formatedData = [];

		data = data ? data : [];
		data.map(function(item, index) {
			formatedData.push({
				id: item._id,
				username: item.username
			})
		});
		return formatedData;
	}

	var formatOneDataHelper = function(data) {
		var formatedData = {
			id: data._id,
			username: data.username
		}
		return formatedData;
	}

	var formatData = function(error, data, emptyDefualtVal) {
		var finalData = {};

		finalData = error ? {ret: false, errmsg: error, data: {}} :
					data && util.isArray(data) ? {ret: true, errmsg: "", data: formatDatasHelper(data)} :
					data ? {ret: true, errmsg: "", data: formatOneDataHelper(data)} :
					emptyDefualtVal ? {ret: true, errmsg: "", data: emptyDefualtVal} : {ret: true, errmsg: "", data: []};

		return finalData;
	}

	return {
		findFields: {name: 1, _id: 1},
		getAll: function(params, callback) {
			var params = params ? params : {};

			userModel.find(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		getOne: function(params, callback) {
			var params = params ? params : {};

			userModel.findOne(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		add: function(navData, callback) {
			var date = getFormatedDate(),
				newUser = assign({createTime: date, modifyTime: date},navData),
				userEntity = new userModel(newUser);

			userEntity.save(function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		update: function(params, navData, callback) {
			var date = getFormatedDate(),
				newUser = assign({modifyTime: date},navData);

			navModel.update(params, {$set: newUser}, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		remove: function(params, callback) {
			userModel.remove(params, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		checkExist: function(params,callback) {
			var params = params ? params : {};

			userModel.findOne(params, function(error, data) {
				var finalData = {};

				finalData = error ? {ret: false, errmsg: error, data: {}} :
							data ? {ret: false, errmsg: "该用户名已经存在，请更换其他用户名！", data: ""} : {ret: true, errmsg: "", data: data};
				callback(finalData);
			});
		},
		checkLogin: function(params,callback) {
			var params = params ? params : {};

			userModel.findOne(params, function(error, data) {
				var finalData = {};

				finalData = error ? {ret: false, errmsg: error, data: {}} :
							data ? {ret: true, errmsg: "", data: {}} : {ret: false, errmsg: "用户名或密码不正确！", data: ""};
				callback(finalData);
			});
		},
		getMaxSort: function(params,callback) {
			var params = params ? params : {};

			userModel.findOne(params, {}, {sort: {sort: -1}},function(error, data) {
				var finalData = formatData(error, data, {sort: 1});

				callback(finalData);
			});
		}
	}
})();

module.exports = userController;