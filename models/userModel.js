var query = require('./DB.js');
var comm = require('./common.js');

module.exports = {
	checkExist: function(params, callback) {
		query({
			sql: 'select id from users where ?',
			data: params,
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results, '该用户名已经存在，请更换其他用户名！', true);
				callback(res);
			}
		});
	},
	checkPassword: function(params,callback) {
		query({
			sql: 'select id from users where username=? and password=?',
			data: [params.username, params.password],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results, '旧密码不正确！', false, true);
				callback(res);
			}
		});
	},
	checkLogin: function(params,callback) {
		query({
			sql: 'select id from users where username=? and password=?',
			data: [params.username, params.password],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results, '用户名或密码不正确！', false, true);
				callback(res);
			}
		});
	},
	add: function(params, callback) {
		query({
			sql: 'insert into users set ?',
			data: params,
			callback: function(error, results, fields) {
				console.log(results.insertId);
				var res = comm.fetchData(error, {id: results.insertId});
				callback(res);
			}
		});
	},
	update: function(where, data, callback) {
		query({
			sql: 'update users set ? where ?',
			data: [data, where],
			callback: function(error, results, fields) {
				var res = comm.fetchData(error, results);
				callback(res);
			}
		});
	},
}