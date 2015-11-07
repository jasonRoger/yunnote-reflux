var Path = require("../../../lib/path/index.jsx"),
	Grid = require('./grid/index.jsx'),
	User = require('../user/User.jsx');

var List = React.createClass({
	render: function() {
		return (
			<div className = "content">
				<div className = "content-hd">
					<div className = "show-path">
						<div className = "path-wrapper">
							<Path />
						</div>
						<User />
					</div>
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