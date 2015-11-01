var Reflux = require("reflux"),
	pdfActions = require("./action.es6");

var URL = {
	UPLOAD: "/api/addFile.json"
}

var pdfStore = Reflux.createStore({
	listenables: [pdfActions],
	onUpload: function(params) {
		var self = this;

		ajax({
			url: URL.UPLOAD,
			type: "post",
			contentType: false,
  			processData: false,
			data: params
		}).done(function(data) {
			self.trigger({ret: true, data: data});
		}).fail(function(res) {
			self.trigger(res);
		});
	}
});

module.exports = pdfStore;