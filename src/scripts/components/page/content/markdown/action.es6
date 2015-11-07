var showActions = Reflux.createActions([
		"getMarkdown"
	]);
var operateActions = Reflux.createActions([
		"addItem",
		"updateItem"
	]);

module.exports = {
	showActions: showActions,
	operateActions: operateActions
};