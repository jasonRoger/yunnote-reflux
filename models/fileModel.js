var query = require('./DB.js');
var comm = require('./common.js');
var tool = require('./tool.js');

function formatData(data) {
	data = data ? data : [];
	data.map(function(item, index) {
		item.fileSize = item.size ? (item.size / (1024 * 1024)).toFixed(1) + "M" : "0M";
		item.modifyTime = tool.formatDate(item.modifyTime);
		item.detail = item.type == 'pdf' ? item.detail : '';
	});
	return data;
}

module.exports = {
	getAll: function(params, callback) {
		query({
			sql: 'select id,name,level,pid,type,author,sort,modifyTime,size,detail from files where pid=? and level=? and author=?',
			data: [params.pid, params.level, params.author],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, formatData(results));
				callback(res);
			}
		});
	},
	getWord: function(params, callback) {
		query({
			sql: 'select id,name,level,pid,type,author,sort,detail from files where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results[0]);
				callback(res);
			}
		});
	},
	getCode: function(params, callback) {
		query({
			sql: 'select id,name,level,pid,type,author,sort,codeHtml,codeJs,codeCss from files where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results[0]);
				callback(res);
			}
		});
	},
	getMaxSort: function(params, callback) {
		query({
			sql: 'select sort from files where author=? and level=? and pid=? order by sort desc',
			data: [params.author, params.level, params.pid],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results[0]);
				callback(res);
			}
		});
	},
	checkExist: function(params, callback) {
		var sql = 'select id,pid,level,type,name from files where ' + (params.id ? '?' : 'name=? and author=? and level=? and pid=? and type=?'),
			data = params.id ? params : [params.name, params.author,params.level, params.pid, params.type];

		query({
			sql: sql,
			data: data,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results, '该文件名已经存在，请更换其他文件名！', true);
				callback(res);
			}
		});
	},
	isExist: function(params, callback) {
		query({
			sql: 'select id,pid,level,type,name from files where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = !error && results.length > 0 ? comm.composeData(true, '', '', results[0]) : comm.composeData(false);
				callback(res);
			}
		});
	},
	add: function(params, callback) {
		query({
			sql: 'insert into files set ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, {id: results.insertId});
				callback(res);
			}
		});
	},
	update: function(where, data, callback) {
		query({
			sql: 'update files set ? where ?',
			data: [data, where],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results);
				callback(res);
			}
		});
	},
	remove: function(params, callback) {
		query({
			sql: 'delete from files where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results);
				callback(res);
			}
		});
	}
}