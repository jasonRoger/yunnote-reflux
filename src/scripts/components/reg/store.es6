var regActions = require("./action.es6");

var URL = {
	ADDITEM: "/api/addUser.json"
}

var operateStore = Reflux.createStore({
	listenables: [regActions.operateActions],
	onAddItem: function(params) {
		var self = this;
		ajax({
			url: URL.ADDITEM,
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
	operateStore: operateStore
};