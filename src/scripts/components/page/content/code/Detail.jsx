var Modal = antd.Modal,
	Path = require("../../../lib/path/index.jsx"),
	codeActions = require('./action.es6'),
	codeStore = require('./store.es6');

var EDITOR = {
	editorHtml: null,
	editorCss: null
}
var Operator = React.createClass({
	mixins: [Reflux.listenTo(codeStore.showStore, "setInitalCode")],
	getInitialState: function() {
		return {
			codeHtml: "",
			codeCss: ""
		};
	},
	setInitalCode: function(data) {
		var self = this;

		EDITOR.editorHtml.setValue(data.codeHtml);
		EDITOR.editorCss.setValue(data.codeCss);
		setTimeout(function() {
			self.updateHtml(EDITOR.editorHtml);
			self.updateStyle(EDITOR.editorCss);
		}, 300);
	},
	editCode: function() {
		router.replaceHash({
			handle: "edit"
		});
	},
	componentDidMount: function() {
		var self = this,
			focusItem = '';

		var editorHtml = CodeMirror.fromTextArea(document.getElementById("js-code-html"), {
			mode : "htmlmixed",
			theme: "3024-night",
			tabSize : 2,
			readOnly: true,
			indentWithTabs : true,
			lineNumbers : true,
			lineWrapping : true,
			matchBrackets : true
		});
		var editorCss = CodeMirror.fromTextArea(document.getElementById("js-code-css"), {
		    mode : "css",
		    theme: "3024-night",
		    tabSize : 2,
		    readOnly: true,
		    indentWithTabs : true,
		    lineNumbers : true,
		    lineWrapping : true,
		    matchBrackets : true
		});
		EDITOR = {
			editorHtml: editorHtml,
			editorCss: editorCss
		}
		self.setInitialStyle();
		codeActions.showActions.getCode({id: router.getHashObject().id});
	},
	setInitialStyle: function() {
		var $codeHtmlWrapper = $("#js-code-html-wrapper"),
			$codeCssWrapper = $("#js-code-css-wrapper");

		$codeHtmlWrapper.find(".CodeMirror").css({height: $codeHtmlWrapper.height()});
		$codeCssWrapper.find(".CodeMirror").css({height: $codeCssWrapper.height()});
		$codeHtmlWrapper.find(".CodeMirror-gutters").css({height: $codeHtmlWrapper.height()});
		$codeCssWrapper.find(".CodeMirror-gutters").css({height: $codeCssWrapper.height()});

		$codeHtmlWrapper.find(".CodeMirror-vscrollbar").css({height: $codeHtmlWrapper.height()});
		$codeCssWrapper.find(".CodeMirror-vscrollbar").css({height: $codeCssWrapper.height()});

		window.onresize = function() {
			setTimeout(function() {
				$codeHtmlWrapper.find(".CodeMirror").css({height: $codeHtmlWrapper.height()});
				$codeCssWrapper.find(".CodeMirror").css({height: $codeCssWrapper.height()});
			}, 300);
		}
	},
	updateStyle: function(editorCss) {
		var head = window.frames["preview"].document.head,
		codeStyle = null,
		codeStyles = head.getElementsByClassName("js-preview-style");

		if(codeStyles.length) {
			codeStyle = codeStyles[0];
		}else {
			codeStyle = document.createElement("style");
			codeStyle.type = 'text/css';
			codeStyle.className = "js-preview-style";
		}
		codeStyle.innerHTML = editorCss.getValue();
		head.appendChild(codeStyle);
	},
	updateHtml: function(editorHtml) {
		var previewDocumemt = window.frames["preview"].document;
  		previewDocumemt.write(editorHtml.getValue());
  		previewDocumemt.close();
	},
	render: function() {
		return (
			<div className = "content">
				<div className = "content-hd">
					<div className = "show-path">
						<div className = "path-wrapper">
							<Path />
						</div>
						<div className = "base-btn save-btn" onClick = {this.editCode} >编辑</div>
					</div>
				</div>
				<div className = "content-bd m-code">
					<div className = "col1" id = "js-code-html-wrapper">
						<textarea id = "js-code-html"></textarea>
					</div>
					<div className = "col2" id = "js-code-css-wrapper">
						<textarea id = "js-code-css"></textarea>
					</div>
					<div className = "col3">
						<iframe className = "preview" name = "preview"></iframe>
					</div>
				</div>
				<div className = "m-code-ft"></div>
			</div>
		);
	}
});

module.exports = Operator;