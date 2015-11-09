var Item = React.createClass({
	updateHash: function(e) {
		var dataset = $(e.target).parents(".row").get(0).dataset;

		router.replaceHash({
			level: dataset.fileLevel,
			type: dataset.fileType,
			handle: "show",
			id: dataset.fileId,
			src: dataset.fileSrc.substr(6)
		});
	},
	contextMenuInit: function(e) {
		if(e.button == 2) {
			var dataset = $(e.target).parents(".row").get(0).dataset;
			this.props.contextMenuInit(dataset);
		}
	},
	render: function() {
		var itemInfo = this.props.itemInfo,
			showFile = {display: itemInfo.type == "word" ? "block" : "none"},
			showFolder = {display: itemInfo.type == "folder" ? "block" : "none"},
			showPdf = {display: itemInfo.type == "pdf" ? "block" : "none"},
			showMarkdown = {display: itemInfo.type == "markdown" ? "block" : "none"},
			showCode = {display: itemInfo.type == "code" ? "block" : "none"};

		var fileType = itemInfo.type == "folder" ? "文件夹" : itemInfo.type;

		return (
			<div className="row" onMouseUp={this.contextMenuInit}
						data-file-id = {itemInfo.id}
						data-file-name = {itemInfo.name}
						data-file-type = {itemInfo.type}
						data-file-src = {itemInfo.type == "pdf" ? itemInfo.detail : ""}
						data-menu-target = "js-cell"
						data-file-level = {itemInfo.level} >
				<div className = "cell file-name js-cell" onClick = {this.updateHash}>
					<span className = "icon-wrap">
						<i style = {showFile} className="iconfont icon-file">&#xe604;</i>
						<i style = {showFolder} className="iconfont">&#xe618;</i>
						<i style = {showPdf} className="iconfont icon-pdf">&#xe620;</i>
						<i style = {showCode} className="iconfont icon-code">&#xe628;</i>
						<i style = {showMarkdown} className="iconfont icon-markdown">&#xe623;</i>
					</span>
					<span className = "name-text js-name-text">
						{itemInfo.name}
					</span>
				</div>
				<div className = "cell file-size js-cell">{fileType}</div>
				<div className = "cell file-modify-time js-cell">{itemInfo.modifyTime}</div>
				<div className = "cell file-modifier js-cell">{itemInfo.author}</div>
				<div className = "cell file-size js-cell">{itemInfo.fileSize}</div>
			</div>
		);
	}
});

module.exports = Item;
