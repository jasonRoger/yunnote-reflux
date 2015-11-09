var showActions = Reflux.createActions([
		"getAll"
	]);
//操作导航数据action
var operateActions = Reflux.createActions([
		"addItem",
		"updateItem",
		"deleteItem"
	]);

module.exports = {
	showActions: showActions,
	operateActions: operateActions
};