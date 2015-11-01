var React = require('react');

var Item = React.createClass({
	setActiveStatus: function(e) {
		this.props.setActiveStatus(e.target.dataset);
	},
	contextMenuInit: function(e) {
		if(e.button == 2) {
			var dataset = e.target.dataset;
			this.props.contextMenuInit(dataset);
		}
	},
	render: function() {
		var itemInfo = this.props.itemInfo;

		return (
			<li className = {itemInfo.isActived ? "selected" : ""}>
				<a href = "javascript:void(0);"
					onMouseUp = {this.contextMenuInit}
					className = "js-nav-item"
					onClick = {this.setActiveStatus}
					data-nav-item-name = {itemInfo.name}
					data-nav-item-id = {itemInfo.id} >{itemInfo.name}</a>
			</li>
		);
	}

});

module.exports = Item;
