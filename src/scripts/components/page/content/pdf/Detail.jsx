var Detail = React.createClass({
	render: function() {
		var pdfSrc = "/pdfweb/web/viewer.html?file=" + this.props.pdfSrc;

		return (
			<iframe className = "pdf-wrapper" src = {pdfSrc}></iframe>
		);
	}
});

module.exports = Detail;