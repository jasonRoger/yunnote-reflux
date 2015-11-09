var userActions = require("./action.es6");

var URL = {
	UPDATEITEM: "/api/updateUser.json"
}

var operateStore = Reflux.createStore({
	listenables: [userActions.operateActions],
	onUpdateItem: function(params) {
		var self = this;
		ajax({
			url: URL.UPDATEITEM,
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