var loginActions = require("./action.es6");

var URL = {
	CHECKLOGIN: "/api/checkLogin.json"
}

var operateStore = Reflux.createStore({
	listenables: [loginActions.operateActions],
	onCheckLogin: function(params) {
		var self = this;
		ajax({
			url: URL.CHECKLOGIN,
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