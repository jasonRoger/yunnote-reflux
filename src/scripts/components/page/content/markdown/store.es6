var Modal = antd.Modal,
	markdownActions = require("./action.es6");

var URL = {
	LIST: "/api/getWord.json",
	ADD: "/api/addFile.json",
	UPDATE: "/api/updateFile.json"
}

var showStore = Reflux.createStore({
	listenables: [markdownActions.showActions],
	onGetMarkdown: function(params) {
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

var operateStore = Reflux.createStore({
	listenables: [markdownActions.operateActions],
	onAddItem: function(params) {
		var self = this;

		ajax({
			url: URL.ADD,
			type: "post",
			data: params
		}).done(function(data) {
			self.trigger({ret: true, data: data});
		}).fail(function(res) {
			self.trigger(res);
		});
	},
	onUpdateItem: function(params) {
		var self = this;

		ajax({
			url: URL.UPDATE,
			type: "post",
			data: params
		}).done(function(data) {
			self.trigger({ret: true, data: data});
		}).fail(function(res) {
			self.trigger(res);
		});
	}
});

module.exports = {
	showStore: showStore,
	operateStore: operateStore
};