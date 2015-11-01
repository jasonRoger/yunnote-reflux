var React = require('react'),
	List = require("./List.jsx"),
	Operator = require("./Operator.jsx");

var Navigator = React.createClass({
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
			<aside className = "aside">
				<div className = "sidebar">
					<Operator menuRefData = {this.state.menuRefData} />
					<List setActiveStatus = {this.setActiveStatus}
						contextMenuInit = {this.contextMenuInit} />
				</div>
			</aside>
		);
	}
});

module.exports = Navigator;
