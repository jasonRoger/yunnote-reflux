var Modal = antd.Modal,
	navActions = require("./action.es6");

var URL = {
	LIST: "/render/navList.json",
	ADD: "/api/addNav.json",
	UPDATE: "/api/updateNav.json",
	DELETE: "/api/deleteNav.json"
}

var showStore = Reflux.createStore({
	listenables: [navActions.showActions],
	onGetAll: function(params) {
		var self = this;
		//请求导航列表数据
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
	listenables: [navActions.operateActions],
	onAddItem: function(params) {
		var self = this;

		ajax({
			url: URL.ADD,
			type: "get",
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
			type: "get",
			data: params
		}).done(function(data) {
			self.trigger({ret: true, data: data});
		}).fail(function(res) {
			self.trigger(res);
		});
	},
	onDeleteItem: function(params) {
		var self = this;

		ajax({
			url: URL.DELETE,
			type: "get",
			data: params
		}).done(function(data) {
			self.trigger({ret: true, type: "delete", data: data});
		}).fail(function(res) {
			Modal.error({
			    title: '错误提示： ',
			    content: "对不起，删除失败！"
			});
		});
	}
});

module.exports = {
	showStore: showStore,
	operateStore: operateStore
};