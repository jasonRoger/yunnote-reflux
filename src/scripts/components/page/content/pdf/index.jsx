var Detail = require('./Detail.jsx'),
	Operator = require('./Operator.jsx'),
	Path = require("../../../lib/path/index.jsx");
//组件映射，将根据hash的值来决定渲染特定的组件
var RouteHandleCompMap = {
	show: Detail,
	upload: Operator
}
var Pdf = React.createClass({
	getInitialState: function() {
		return {
			handle: router.getHashObject().handle,
			pdfSrc: ""
		};
	},
	componentDidMount: function() {
		router.watchHashChange(function(hashObj, hashStr) {
			this.setState({
				handle: hashObj.handle,
				pdfSrc: hashObj.src
			});
		}, "pdfHanleWatcher", this);
	},
	componentWillUnmount: function() {
		router.unWatchHashChange("pdfHanleWatcher");
	},
	render: function() {
		var handle = this.state.handle,
			RouteHandleComp = RouteHandleCompMap[handle];

		return (
			<div className="content pdf-content">
				<div className="content-hd">
					<Path />
				</div>
				<div className = "content-bd js-content-bd">
					<RouteHandleComp pdfSrc = {this.state.pdfSrc} />
				</div>
			</div>
		);
	}
});

module.exports = Pdf;