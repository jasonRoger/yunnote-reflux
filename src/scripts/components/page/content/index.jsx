var React = require('react'),
	List = require("./list/index.jsx"),
	Word = require("./word/index.jsx"),
	Markdown = require('./markdown/index.jsx'),
	Pdf = require("./pdf/index.jsx"),
	Code = require("./code/index.jsx");
//组件映射，将根据hash的值来决定渲染特定的组件
var RouteHandleCompMap = {
	list: List,
	word: Word,
	markdown: Markdown,
	pdf: Pdf,
	code: Code
}

var Content = React.createClass({
	getInitialState: function() {
		return {
			type: "list"
		};
	},
	componentDidMount: function() {
		//添加路由监听函数，当hash改变时将执行注册的回调
		router.watchHashChange(function(hashObject, hashString){
			this.setState({
				type: hashObject.type == "folder" ? "list" : hashObject.type
			});
		}, "typeWatcher", this);
	},
	render: function() {
		var type = this.state.type,
			RouteHandleComp = RouteHandleCompMap[type];

		return (
			<div className = "main">
				<RouteHandleComp />
			</div>
		);
	}
});

module.exports = Content;