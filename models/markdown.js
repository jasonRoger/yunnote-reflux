var mongoose = require('./db.js'),
	assign = require("object-assign"),
	util = require("util");

var markdownController = (function() {

	var markdownSchema = new mongoose.Schema({
		pid: String,
		level: Number,
		name: String,
		originMD: String,
		convertedMD: String,
		author: String
	}, {collection: "markdowns"});

	var markdownModel = mongoose.model("markdown", markdownSchema);

	var formatDatasHelper = function(data) {
		var formatedData = [];

		data = data ? data : [];
		data.map(function(item, index) {
			formatedData.push({
				id: item._id,
				pid: item.pid,
				level: item.level,
				name: item.name,
				originMD: item.originMD,
				convertedMD: item.convertedMD
			})
		});
		return formatedData;
	}

	var formatOneDataHelper = function(data) {
		var formatedData = {
			id: data._id,
			level: data.level,
			pid: data.pid,
			name: data.name,
			originMD: data.originMD,
			convertedMD: data.convertedMD
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
		findFields: {_id: 1, pid: 1, level: 1, name: 1, originMD: 1, convertedMD: 1},
		getAll: function(params, callback) {
			var params = params ? params : {};

			markdownModel.find(params, this.findFields, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		getOne: function(params, callback) {
			var params = params ? params : {};

			markdownModel.findOne(params, this.findFields, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		add: function(codeData, callback) {
			var markdownEntity = new markdownModel(codeData);
			markdownEntity.save(function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		},
		update: function(params, codeData, callback) {
			markdownModel.update(params, {$set: codeData}, function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		},
		remove: function(params, callback) {
			markdownModel.remove(params, function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		}
	}
})();

module.exports = markdownController;