var Detail = require('./Detail.jsx'),
	Operator = require('./Operator.jsx');
//组件映射，将根据hash的值来决定渲染特定的组件
var RouteHandleCompMap = {
	show: Detail,
	add: Operator,
	edit: Operator
}
var Word = React.createClass({
	getInitialState: function() {
		return {
			handle: router.getHashObject().handle
		};
	},
	componentDidMount: function() {
		router.watchHashChange(function(hashObj, hashStr) {
			this.setState({
				handle: hashObj.handle
			});
		}, "wordHanleWatcher", this);
	},
	componentWillUnmount: function() {
		router.unWatchHashChange("wordHanleWatcher");
	},
	render: function() {
		var handle = this.state.handle,
			RouteHandleComp = RouteHandleCompMap[handle];

		return (
			<RouteHandleComp />
		);
	}

});

module.exports = Word;