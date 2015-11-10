var Modal = antd.Modal,
	pathActions = require("./action.es6");

var URL = {
	LIST: "/api/pathList.json"
}

var pathStore = Reflux.createStore({
	listenables: [pathActions],
	onGetPath: function(params) {
		var self = this;
		//请求path列表数据
		ajax({
			url: URL.LIST,
			type: "get",
			data: params
		}).done(function(data) {
			self.trigger(data);
		}).fail(function(res) {
			Modal.error({
			    title: '错误提示： ',
			    content: res.errmsg
			});
		});
	}
});

module.exports = pathStore;