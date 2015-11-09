var showActions = Reflux.createActions([
		"getWord"
	]);
var operateActions = Reflux.createActions([
		"addItem",
		"updateItem"
	]);

module.exports = {
	showActions: showActions,
	operateActions: operateActions
};