var React = require('react'),
	Reflux = require('reflux'),
	antd = require('antd'),
	Modal = antd.Modal,
	markdownActions = require('./action.es6'),
	markdownStore = require('./store.es6');

var Operator = React.createClass({
	mixins: [Reflux.listenTo(markdownStore.operateStore, "onOperateStatus"), Reflux.listenTo(markdownStore.showStore, "onSetInitialData")],
	getInitialState: function() {
		return {
			name: "",
			markdownEditor: null
		};
	},
	//用于处理新增或新建的后续操作
	onOperateStatus: function(res) {
		var hashObj = router.getHashObject();
		if(res && res.ret) {
			router.replaceHash({
				level: hashObj.handle == "edit" ? hashObj.level : res.data.level,
				type: "markdown",
				handle: "show",
				id: hashObj.handle == "edit" ? hashObj.id : res.data.pid
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
		var markdownEditor = editormd("editormd", {
            path: "./editormd/lib/",
            height: "auto",
            markdown : data.originMD,
            tex : true,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart : true,             // 开启流程图支持，默认关闭
            sequenceDiagram : true       // 开启时序/序列图支持，默认关闭,
        });
		this.setState({
			name: data.name,
			markdownEditor: markdownEditor
		});
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
			type: hashObj.handle == "edit" ? "markdown" : "folder",
			handle: "show",
			id: hashObj.id
		});
	},
	saveMarkdown: function() {
		this.validateData() ? this.submitData() : "";
	},
	submitData: function() {
		var data = {},
			hashObj = router.getHashObject(),
			originMD = this.state.markdownEditor.getMarkdown(),
			convertedMD = this.state.markdownEditor.getPreviewedHTML();

		//hashObj.handle == edit 则是编辑操作，否则则为添加
		//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
		if(hashObj.handle == "edit") {
			data = JSON.stringify({
				id: hashObj.id,
				name: this.state.name,
				originMD: originMD,
				convertedMD: convertedMD
			});
			markdownActions.operateActions.updateItem(data);
		}else {
			data = JSON.stringify({
				pid: hashObj.id,
				type: "markdown",
				level: parseInt(hashObj.level) + 1,
				name: this.state.name,
				originMD: originMD,
				convertedMD: convertedMD
			});
			markdownActions.operateActions.addItem(data);
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
			hashObj = router.getHashObject();
        if(hashObj.handle == "add") {
			$.get('/editormd/default.md', function(md) {
	            var markdownEditor = editormd("editormd", {
	                path: "./editormd/lib/",
	                height: "auto",
	                markdown : md,
	                tex : true,                   // 开启科学公式TeX语言支持，默认关闭
	                flowChart : true,             // 开启流程图支持，默认关闭
	                sequenceDiagram : true       // 开启时序/序列图支持，默认关闭,
	            });
	            self.setState({
	            	markdownEditor: markdownEditor
	            });
	        });
		}else {
			markdownActions.showActions.getMarkdown({id: router.getHashObject().id});
		}
	},
	render: function() {
		return (
			<div className = "content m-markdown">
				<div className = "content-hd">
					<div className = "m-code">
						<input value = {this.state.name}
							type = "text"
							className = "title"
							onChange = {this.handleChange}
							placeholder = "请输入文章标题！" />
						<span className = "base-btn save-btn" onClick = {this.saveMarkdown}>保存</span>
						<span className = "base-btn save-btn" onClick = {this.dropAndBack}>返回</span>
					</div>
				</div>
				<div className = "content-bd">
					<div id="editormd">
                		<textarea style = {{display: 'none'}}></textarea>
                	</div>
				</div>
				<div className = "content-ft"></div>
			</div>
		);
	}
});

module.exports = Operator;