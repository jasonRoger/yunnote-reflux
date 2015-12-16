var Modal = antd.Modal,
	codeActions = require('./action.es6'),
	codeStore = require('./store.es6');
var EDITOR = {
	editorHtml: null,
	editorCss: null
}
var Operator = React.createClass({
	mixins: [Reflux.listenTo(codeStore.operateStore, "onOperateStatus"), Reflux.listenTo(codeStore.showStore, "onSetInitialData")],
	getInitialState: function() {
		return {
			name: ""
		};
	},
	//用于处理新增或新建的后续操作
	onOperateStatus: function(res) {
		var hashObj = router.getHashObject();
		if(res && res.ret) {
			router.replaceHash({
				level: hashObj.handle == "edit" ? hashObj.level : parseInt(hashObj.level) + 1,
				type: "code",
				handle: "show",
				id: hashObj.handle == "edit" ? hashObj.id : res.data.id
			});
		}else {
			Modal.error({
			    title: '错误提示： ',
			    content: res.errmsg
			});
		}
	},
	//修改时为字段赋初值
	onSetInitialData: function(data) {
		this.setCode(data);
		this.setState({
			name: data.name
		});
	},
	setCode: function(data) {
		var self = this;
		EDITOR.editorHtml.setValue(data.codeHtml);
		EDITOR.editorCss.setValue(data.codeCss);
		setTimeout(function() {
			self.updateHtml(EDITOR.editorHtml);
			self.updateStyle(EDITOR.editorCss);
		}, 300);
	},
	handleChange: function(e) {
		this.setState({
			name: e.target.value
		});
	},
	dropAndBack: function() {
		var hashObj = router.getHashObject();
		//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
		router.replaceHash({
			level: hashObj.level,
			type: hashObj.handle == "edit" ? "code" : "folder",
			handle: "show",
			id: hashObj.id
		});
	},
	saveCode: function() {
		this.validateData() ? this.submitData() : "";
	},
	submitData: function() {
		var data = {},
			hashObj = router.getHashObject();

		//hashObj.handle == edit 则是编辑操作，否则则为添加
		//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
		if(hashObj.handle == "edit") {
			data = JSON.stringify({
				id: hashObj.id,
				name: this.state.name,
				codeHtml: EDITOR.editorHtml.getValue(),
				codeCss: EDITOR.editorCss.getValue()
			});
			codeActions.operateActions.updateItem(data);
		}else {
			data = JSON.stringify({
				pid: hashObj.id,
				type: "code",
				level: parseInt(hashObj.level) + 1,
				name: this.state.name,
				codeHtml: EDITOR.editorHtml.getValue(),
				codeCss: EDITOR.editorCss.getValue()
			});
			codeActions.operateActions.addItem(data);
		}
	},
	validateData: function() {
		if(this.state.name.trim() == "") {
			Modal.error({
			    title: '错误提示： ',
			    content: "标题不得空！"
			  });
			return ;
		}
		return true;
	},
	componentDidMount: function() {
		var self = this,
			focusItem = '',
			hashObj = router.getHashObject();

		var editorHtml = CodeMirror.fromTextArea(document.getElementById("js-code-html"), {
			mode : "htmlmixed",
			theme: "3024-night",
			tabSize : 2,
			extraKeys: {"Ctrl-Space": "autocomplete"},
			indentWithTabs : true,
			lineNumbers : true,
			lineWrapping : true,
			matchBrackets : true
		});
		var editorCss = CodeMirror.fromTextArea(document.getElementById("js-code-css"), {
		    mode : "css",
		    theme: "3024-night",
		    tabSize : 2,
		    extraKeys: {"Ctrl-Space": "autocomplete"},
		    indentWithTabs : true,
		    lineNumbers : true,
		    lineWrapping : true,
		    matchBrackets : true
		});
		editorHtml.on("focus", function(editor, e) {
			focusItem = 'html';
		});
		editorCss.on("focus", function(editor, e) {
			focusItem = 'css';
		});
		editorCss.on("keyup", function(editor, e) {
			self.updateStyle(editorCss);
		});
		document.addEventListener('keydown', function(e) {
			if(e.keyCode == 83 && e.ctrlKey) {
				e.preventDefault();
				if(focusItem == 'html') {
					self.updateHtml(editorHtml);
					self.updateStyle(editorCss);
				}
			}
		}, true);
		self.setInitialStyle();
		EDITOR = {
			editorHtml: editorHtml,
			editorCss: editorCss
		}
		if(hashObj.handle == "add") {
			self.setInitalCode(editorHtml, editorCss);
		}else {
			codeActions.showActions.getCode({id: router.getHashObject().id});
		}
	},
	setInitalCode: function(editorHtml, editorCss) {
		var self = this;

		editorHtml.setValue(['<!DOCTYPE html>',
                        '<html>',
                        '<head>',
                          '  <meta charset="utf-8">',
                          '  <title>足迹屋</title>',
                        '</head>',
                        '<body>',
                          '  <div class="test"></div>',
                          '  <script type="text/javascript" src="/scripts/jquery.js"></script>',
                          '  <script type="text/javascript">console.log($)</script>',
                        '</body>',
                        '</html>'].join("\r\n"));
		editorCss.setValue(['.test {',
		                        '  width: 100px;',
		                        '  height: 100px;',
		                        '  background: green;',
		                      '}'].join("\r\n"));
		setTimeout(function() {
			self.updateHtml(editorHtml);
			self.updateStyle(editorCss);
		}, 300);
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
					<div className = "m-code">
						<input value = {this.state.name}
							type = "text"
							className = "title"
							onChange = {this.handleChange}
							placeholder = "请输入文章标题！" />
						<span className = "base-btn save-btn" onClick = {this.saveCode}>保存</span>
						<span className = "base-btn save-btn" onClick = {this.dropAndBack}>返回</span>
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