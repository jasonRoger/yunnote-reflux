var mongoose = require('./db.js'),
	assign = require("object-assign"),
	util = require("util");

var codeController = (function() {

	var codeSchema = new mongoose.Schema({
		pid: String,
		level: Number,
		name: String,
		codeHtml: String,
		codeCss: String,
		codeJs: String,
		author: String
	}, {collection: "codes"});

	var codeModel = mongoose.model("code", codeSchema);

	var formatDatasHelper = function(data) {
		var formatedData = [];

		data = data ? data : [];
		data.map(function(item, index) {
			formatedData.push({
				id: item._id,
				pid: item.pid,
				level: item.level,
				name: item.name,
				codeHtml: item.codeHtml,
				codeCss: item.codeCss,
				codeJs: item.codeJs
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
			codeHtml: data.codeHtml,
			codeCss: data.codeCss,
			codeJs: data.codeJs
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
		findFields: {_id: 1, pid: 1, level: 1, name: 1, codeHtml: 1, codeCss: 1, codeJs: 1},
		getAll: function(params, callback) {
			var params = params ? params : {};

			codeModel.find(params, this.findFields, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		getOne: function(params, callback) {
			var params = params ? params : {};

			codeModel.findOne(params, this.findFields, function(error, data) {
				var finalData = formatData(error, data);

				callback(finalData);
			});
		},
		add: function(codeData, callback) {
			var codEntity = new codeModel(codeData);
			codEntity.save(function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		},
		update: function(params, codeData, callback) {
			codeModel.update(params, {$set: codeData}, function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		},
		remove: function(params, callback) {
			codeModel.remove(params, function(error, data) {
				var finalData = formatData(error, data);
				callback(finalData);
			});
		}
	}
})();

module.exports = codeController;