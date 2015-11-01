var mongoose = require('./db.js'),
	assign = require("object-assign"),
	util = require("util");

var fileController = (function() {

	var fileSchema = new mongoose.Schema({
		name: String,
		level: Number,
		pid: String,
		type: String,
		author: String,
		sort: Number,
		createTime: String,
		modifyTime: String,
		detail: String,
		size: Number
	}, {collection: "files"});

	var fileModel = mongoose.model("file", fileSchema);

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
				pid: item.pid,
				name: item.name,
				level: item.level,
				type: item.type,
				modifyTime: item.modifyTime,
				author: item.author,
				sort: item.sort,
				fileSize: item.size ? (item.size / (1024 * 1024)).toFixed(1) + "M" : "0M",
				detail: item.detail
			})
		});
		return formatedData;
	}

	var formatOneDataHelper = function(data) {
		var formatedData = {
			id: data._id,
			pid: data.pid,
			name: data.name,
			sort: data.sort,
			level: data.level,
			type: data.type,
			detail: data.detail
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
		findFields: {_id: 1, name: 1, level: 1, type: 1, modifyTime: 1, author: 1, sort: 1, detail: 1, pid: 1, size: 1},
		getAll: function(params, callback) {
			var params = params ? params : {};

			fileModel.find(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		getOne: function(params, callback) {
			var params = params ? params : {};

			fileModel.findOne(params, this.findFields, {sort: {sort: 1}},function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		add: function(fileData, callback) {
			var date = getFormatedDate(),
				newNav = assign({createTime: date, modifyTime: date},fileData),
				fileEntity = new fileModel(newNav);

			fileEntity.save(function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		update: function(params, fileData, callback) {
			var date = getFormatedDate(),
				newNav = assign({modifyTime: date},fileData);

			fileModel.update(params, {$set: newNav}, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		remove: function(params, callback) {
			fileModel.remove(params, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		checkExist: function(params,callback) {
			var params = params ? params : {};

			fileModel.findOne(params, function(error, data) {
				var finalData = {};

				finalData = error ? {ret: false, errmsg: error, data: {}} :
							data ? {ret: false, errmsg: "该文件已经存在，请更换其他文件！", data: ""} : {ret: true, errmsg: "", data: data};
				callback(finalData);
			});
		},
		getMaxSort: function(params,callback) {
			var params = params ? params : {};

			fileModel.findOne(params, {}, {sort: {sort: -1}},function(error, data) {
				var finalData = formatData(error, data, {sort: 1});

				callback(finalData);
			});
		}
	}
})();

module.exports = fileController;