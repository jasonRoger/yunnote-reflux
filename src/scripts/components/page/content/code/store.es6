var Reflux = require("reflux"),
	antd = require('antd'),
	Modal = antd.Modal,
	CodeActions = require("./action.es6");

var URL = {
	LIST: "/api/getCode.json",
	ADD: "/api/addCode.json",
	UPDATE: "/api/updateCode.json"
}

var showStore = Reflux.createStore({
	listenables: [CodeActions.showActions],
	onGetCode: function(params) {
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
	listenables: [CodeActions.operateActions],
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