var React = require('react'),
	Detail = require('./Detail.jsx'),
	Operator = require('./Operator.jsx');
//组件映射，将根据hash的值来决定渲染特定的组件
var RouteHandleCompMap = {
	show: Detail,
	add: Operator,
	edit: Operator
}
var Code = React.createClass({
	getInitialState: function() {
		var hashObj = router.getHashObject();

		return {
			handle: hashObj.handle
		};
	},
	componentDidMount: function() {
		router.watchHashChange(function(hashObj, hashStr) {
			this.setState({
				handle: hashObj.handle
			});
		}, "markdownHanleWatcher", this);
	},
	componentWillUnmount: function() {
		router.unWatchHashChange("markdownHanleWatcher");
	},
	render: function() {
		var handle = this.state.handle,
			RouteHandleComp = RouteHandleCompMap[handle];

		return (
			<RouteHandleComp />
		);
	}
});

module.exports = Code;