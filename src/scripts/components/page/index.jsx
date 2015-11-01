var React = require('react');
var Navigator = require("./navigator/index.jsx");
var Content = require("./content/index.jsx");

var Page = React.createClass({
	render: function() {
		return (
			<div className="page">
				<Navigator />
				<Content />
			</div>
		);
	}
});

module.exports = Page;
