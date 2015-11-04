var React = require('react'),
	Reflux = require('reflux'),
	markdownActions = require('./action.es6'),
	markdownStore = require('./store.es6'),
	Path = require("../../../lib/path/index.jsx");

var Detail = React.createClass({
	mixins: [Reflux.listenTo(markdownStore.showStore, "setInitalMarkdown")],
	getInitialState: function() {
		return {
			detail: ""
		};
	},
	setInitalMarkdown: function(data) {
		editormd.markdownToHTML("js-editormd-preview", {
            markdown: data.detail ,//+ "\r\n" + $("#append-test").text(),
            htmlDecode: "style,script,iframe",
            flowChart: true,  // 默认不解析
            sequenceDiagram: true,  // 默认不解析
        });
	},
	editMarkdown: function() {
		router.replaceHash({
			handle: "edit"
		});
	},
	componentDidMount: function() {
		markdownActions.showActions.getMarkdown({id: router.getHashObject().id});
	},
	render: function() {
		return (
			<div className = "content m-markdown m-show-markdown">
				<div className = "content-hd">
					<div className = "show-path">
						<div className = "path-wrapper">
							<Path />
						</div>
						<div className = "base-btn save-btn" onClick = {this.editMarkdown} >编辑</div>
					</div>
				</div>
				<div className = "content-bd">
					<div className = "editormd-preview">
						<div id="js-editormd-preview">
			               <textarea style={{display: "none"}}></textarea>
			            </div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Detail;