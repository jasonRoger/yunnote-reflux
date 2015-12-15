var mysql = require('mysql');
var configs = require('../config.js');

var pool = mysql.createPool({
  host: configs.HOST,
  port: configs.PORT,
  user: configs.USER,
  password: configs.PASSWORD,
  database: configs.DBNAME
});

/**
* @params.sql sql语句
* @params.data sql语句中holder对应的数据
* @params.callback 回调函数
*/
var query = function(params) {
	pool.getConnection(function(error, conn) {
		if(error) {
			params.callback && params.callback(error, null, null);
		} else {
			conn.query(params.sql, params.data, function(err, results, fields) {
				conn.release();
				params.callback && params.callback(err, results, fields);
			});
		}
	});
}

module.exports = {
	query: query,
	pool: pool
};
