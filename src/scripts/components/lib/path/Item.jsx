var React = require('react');

var Item = React.createClass({

	updateHash: function(e) {
		var dataset = e.target.dataset;

		router.replaceHash({
			level: dataset.pathLevel,
			type: dataset.pathType,
			handle: "show",
			id: dataset.pathId
		});
	},

	render: function() {
		var itemInfo = this.props.itemInfo,
			rootClass = itemInfo.level == 0 ? "root" : "";

		return (
			<li className={rootClass}
				onClick={this.updateHash}
				data-path-id={itemInfo.id}
				data-path-type={itemInfo.type}
				data-path-level={itemInfo.level}>
				{itemInfo.name}
			</li>
		);
	}

});

module.exports = Item;
