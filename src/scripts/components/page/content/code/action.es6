var showActions = Reflux.createActions([
		"getCode"
	]);
var operateActions = Reflux.createActions([
		"addItem",
		"updateItem"
	]);

module.exports = {
	showActions: showActions,
	operateActions: operateActions
};