var Modal = antd.Modal,
	Path = require("../../../lib/path/index.jsx"),
	codeActions = require('./action.es6'),
	codeStore = require('./store.es6');

var EDITOR = {
	editorHtml: null,
	editorJs: null,
	editorCss: null
}
var Operator = React.createClass({
	mixins: [Reflux.listenTo(codeStore.showStore, "setInitalCode")],
	getInitialState: function() {
		return {
			codeHtml: "",
			codeCss: "",
			codeJs: ""
		};
	},
	setInitalCode: function(data) {
		var self = this;

		EDITOR.editorHtml.setValue(data.codeHtml);
		EDITOR.editorJs.setValue(data.codeJs);
		EDITOR.editorCss.setValue(data.codeCss);
		setTimeout(function() {
			self.updateHtml(EDITOR.editorHtml);
			self.updateStyle(EDITOR.editorCss);
			self.updateScript(EDITOR.editorJs);
		}, 300);
	},
	editCode: function() {
		router.replaceHash({
			handle: "edit"
		});
	},
	componentDidMount: function() {
		var self = this;

		var editorHtml = CodeMirror.fromTextArea(document.getElementById("js-code-html"), {
			mode : "htmlmixed",
			theme: "3024-night",
			tabSize : 2,
			indentWithTabs : true,
			lineNumbers : true,
			lineWrapping : true,
			matchBrackets : true
		});
		var editorJs = CodeMirror.fromTextArea(document.getElementById("js-code-js"), {
		    mode : "javascript",
		    theme: "3024-night",
		    tabSize : 2,
		    indentWithTabs : true,
		    lineNumbers : true,
		    lineWrapping : true,
		    matchBrackets : true
		});
		var editorCss = CodeMirror.fromTextArea(document.getElementById("js-code-css"), {
		    mode : "css",
		    theme: "3024-night",
		    tabSize : 2,
		    indentWithTabs : true,
		    lineNumbers : true,
		    lineWrapping : true,
		    matchBrackets : true
		});
		editorHtml.on("keyup", function(editor, e) {
			if(e.ctrlKey && e.keyCode == 13) {
				self.updateHtml(editorHtml);
				self.updateStyle(editorCss);
				self.updateScript(editorJs);
			}
		});
		editorJs.on("keyup", function(editor, e) {
			if(e.ctrlKey && e.keyCode == 13) {
				self.updateHtml(editorHtml);
				self.updateStyle(editorCss);
				self.updateScript(editorJs);
			}
		});
		editorCss.on("keyup", function(editor, e) {
			self.updateStyle(editorCss);
		});
		EDITOR = {
			editorHtml: editorHtml,
			editorJs: editorJs,
			editorCss: editorCss
		}
		self.setInitialStyle();
		codeActions.showActions.getCode({id: router.getHashObject().id});
	},
	setInitialStyle: function() {
		var $codeHtmlWrapper = $("#js-code-html-wrapper"),
			$codeJsWrapper = $("#js-code-js-wrapper"),
			$codeCssWrapper = $("#js-code-css-wrapper"),
			$codeHtmlParrents = $codeHtmlWrapper.parents(".col1");

		$codeHtmlWrapper.find(".CodeMirror").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeJsWrapper.find(".CodeMirror").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeCssWrapper.find(".CodeMirror").css({height: $codeCssWrapper.height()});
		$codeHtmlWrapper.find(".CodeMirror-gutters").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeJsWrapper.find(".CodeMirror-gutters").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeCssWrapper.find(".CodeMirror-gutters").css({height: $codeCssWrapper.height()});

		$codeHtmlWrapper.find(".CodeMirror-vscrollbar").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeJsWrapper.find(".CodeMirror-vscrollbar").css({height: $codeHtmlParrents.height() / 2 - 7});
		$codeCssWrapper.find(".CodeMirror-vscrollbar").css({height: $codeCssWrapper.height()});

		window.onresize = function() {
			setTimeout(function() {
				$codeHtmlWrapper.find(".CodeMirror").css({height: $codeHtmlParrents.height() / 2 - 7});
				$codeJsWrapper.find(".CodeMirror").css({height: $codeHtmlParrents.height() / 2 - 7});
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
	updateScript: function(editorJs) {
		var body = window.frames["preview"].document.body,
		codeScript = null,
		libScript = null,
		codeScripts = body.getElementsByClassName("js-preview-script"),
		libScripts = body.getElementsByClassName("js-lib-script");

		if(codeScripts.length) {
			codeScript = codeScripts[0];
		}else {
			codeScript = document.createElement("script");
			codeScript.type = 'text/javascript';
			codeScript.className = "js-preview-script";
		}
		if(!libScripts.length) {
			libScript = document.createElement("script");
			libScript.type = 'text/javascript';
			libScript.src = '/scripts/base.js';
			libScript.className = "js-lib-script";
			body.appendChild(libScript);
		}
		codeScript.innerHTML = editorJs.getValue();
		body.appendChild(codeScript);
	},
	updateHtml: function(editorHtml) {
		var previewDocumemt = window.frames["preview"].document;
  		previewDocumemt.documentElement.innerHTML = editorHtml.getValue();
	},
	componentDidUpdate: function() {
		var hashObj = router.getHashObject();

		if(hashObj.handle == "edit") {

		}
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
					<div className = "col1">
						<div className = "row1" id = "js-code-html-wrapper">
							<textarea id = "js-code-html"></textarea>
						</div>
						<div className = "row2" id = "js-code-js-wrapper">
							<textarea id = "js-code-js"></textarea>
						</div>
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