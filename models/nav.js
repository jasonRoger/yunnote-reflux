var mongoose = require('./db.js'),
	assign = require("object-assign"),
	util = require("util");

var navController = (function() {

	var navSchema = new mongoose.Schema({
		name: String,
		author: String,
		sort: Number,
		createTime: String,
		modifyTime: String
	}, {collection: "navs"});

	var navModel = mongoose.model("nav", navSchema);

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
				name: item.name,
				sort: item.sort,
				level: 0,
				isActived: index == 0 ? true : false
			})
		});
		return formatedData;
	}

	var formatOneDataHelper = function(data) {
		var formatedData = {
			id: data._id,
			name: data.name,
			sort: data.sort,
			type: "folder",
			level: 0
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
		findFields: {name: 1, sort: 1, _id: 1},
		getAll: function(params, callback) {
			var params = params ? params : {};

			navModel.find(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		getOne: function(params, callback) {
			var params = params ? params : {};

			navModel.findOne(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		add: function(navData, callback) {
			var date = getFormatedDate(),
				newNav = assign({createTime: date, modifyTime: date},navData),
				navEntity = new navModel(newNav);

			navEntity.save(function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		update: function(params, navData, callback) {
			var date = getFormatedDate(),
				newNav = assign({modifyTime: date},navData);

			navModel.update(params, {$set: newNav}, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		remove: function(params, callback) {
			navModel.remove(params, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		checkExist: function(params,callback) {
			var params = params ? params : {};

			navModel.findOne(params, function(error, data) {
				var finalData = {};

				finalData = error ? {ret: false, errmsg: error, data: {}} :
							data ? {ret: false, errmsg: "该主题已经存在，请更换其他主题！", data: ""} : {ret: true, errmsg: "", data: data};
				callback(finalData);
			});
		},
		getMaxSort: function(params,callback) {
			var params = params ? params : {};

			navModel.findOne(params, {}, {sort: {sort: -1}},function(error, data) {
				var finalData = formatData(error, data, {sort: 1});

				callback(finalData);
			});
		}
	}
})();

module.exports = navController;