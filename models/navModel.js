var db = require('./DB.js');
var comm = require('./common.js');
var tool = require('./tool.js');

function formatData(data) {
	data = data ? data : [];
	data.map(function(item, index) {
		item.level = 0;
		item.type = 'folder';
		item.isActived = index == 0;
	});
	return data;
}

module.exports = {
	getAll: function(params, callback) {
		db.query({
			sql: 'select * from navs where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, formatData(results));
				callback(res);
			}
		});
	},
	checkExist: function(params, callback) {
		var sql = 'select id,name from navs where ' + (params.id ? '?' : 'name=? and author=?'),
			data = params.id ? params : [params.name, params.author];

		db.query({
			sql: sql,
			data: data,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, formatData(results), '该导航名已经存在，请更换其他导航！', true);
				callback(res);
			}
		});
	},
	isExist: function(params, callback) {
		db.query({
			sql: 'select id,name from navs where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = !error && results.length > 0 ? comm.composeData(true, '', '', formatData(results)[0]) : comm.composeData(false);
				callback(res);
			}
		});
	},
	add: function(params, callback) {
		db.query({
			sql: 'insert into navs set ?',
			data: params,
			callback: function(error, results, fields) {
				console.log(params);
				var res = comm.fetchData(error, error ? {} : {id: results.insertId});
				callback(res);
			}
		});
	},
	update: function(where, data, callback) {
		db.query({
			sql: 'update navs set ? where ?',
			data: [data, where],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results);
				callback(res);
			}
		});
	},
	remove: function(params, callback) {
		db.query({
			sql: 'delete from navs where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results);
				callback(res);
			}
		});
	},
	getMaxSort: function(params, callback) {
		db.query({
			sql: 'select sort from navs where ? order by sort desc',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results[0]);
				callback(res);
			}
		});
	}
}