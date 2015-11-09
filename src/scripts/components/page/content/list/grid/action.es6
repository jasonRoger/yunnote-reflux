var showActions = Reflux.createActions([
		"getList"
	]);
//操作导航数据action
var operateActions = Reflux.createActions([
		"addItem",
		"renameItem",
		"deleteItem"
	]);

module.exports = {
	showActions: showActions,
	operateActions: operateActions
};