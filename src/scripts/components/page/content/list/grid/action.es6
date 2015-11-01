var Reflux = require("reflux");

//获取导航数据action
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