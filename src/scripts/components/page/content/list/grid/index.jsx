var List = require('./List.jsx'),
	Operator = require('./Operator.jsx');

var Grid = React.createClass({
	getInitialState: function() {
		return {
			menuRefData: {}
		};
	},
	contextMenuInit: function(data) {
		this.setState({
			menuRefData: data
		});
	},
	render: function() {

		return (
			<div className = "layout-table js-layout-table">
				<div className = "table-hd">
					<div className = "row">
						<div className = "cell file-name js-cell-hd">文件名</div>
						<div className = "cell file-size js-cell-hd">文件类型</div>
						<div className = "cell file-modify-time js-cell-hd">修改时间</div>
						<div className = "cell file-modifier js-cell-hd">最近修改人</div>
						<div className = "cell file-size js-cell-hd">文件大小</div>
					</div>
				</div>
				<List contextMenuInit = {this.contextMenuInit} />
				<Operator menuRefData = {this.state.menuRefData} />
			</div>
		);
	}

});

module.exports = Grid;