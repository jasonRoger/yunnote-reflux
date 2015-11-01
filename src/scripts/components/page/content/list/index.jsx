var React = require('react'),
	Path = require("../../../lib/path/index.jsx"),
	Grid = require('./grid/index.jsx');

var List = React.createClass({

	render: function() {
		return (
			<div className = "content">
				<div className = "content-hd">
					<Path />
				</div>
				<div className = "js-content-bd content-bd">
					<Grid />
				</div>
				<div className = "content-ft"></div>
			</div>
		);
	}

});

module.exports = List;