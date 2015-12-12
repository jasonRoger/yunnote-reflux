var Modal = antd.Modal,
	wordActions = require('./action.es6'),
	wordStore = require('./store.es6');

var Operator = React.createClass({
	mixins: [Reflux.listenTo(wordStore.operateStore, "onOperateStatus"), Reflux.listenTo(wordStore.showStore, "onSetInitialData")],
	getInitialState: function() {
		return {
			containerWidth: (document.body.clientWidth - 246) + "px",
			containerHeight: (document.body.clientHeight - 124) + "px",
			name: "",
			detail: ""
		};
	},
	//用于处理新增或新建的后续操作
	onOperateStatus: function(res) {
		var hashObj = router.getHashObject();
		if(res && res.ret) {
			router.replaceHash({
				level: hashObj.handle == "edit" ? hashObj.level : parseInt(hashObj.level) + 1,
				type: "word",
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
		this.setState({
			name: data.name,
			detail: data.detail
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
			type: hashObj.handle == "edit" ? "word" : "folder",
			handle: "show",
			id: hashObj.id
		});
	},
	saveArticle: function() {
		this.validateData() ? this.submitData() : "";
	},
	submitData: function() {
		var data = {},
			hashObj = router.getHashObject(),
			detail = UE.getEditor('article').getContent();

		//hashObj.handle == edit 则是编辑操作，否则则为添加
		//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
		if(hashObj.handle == "edit") {
			data = JSON.stringify({
				id: hashObj.id,
				name: this.state.name,
				detail: detail
			});
			wordActions.operateActions.updateItem(data);
		}else {
			data = JSON.stringify({
				pid: hashObj.id,
				type: "word",
				level: parseInt(hashObj.level) + 1,
				name: this.state.name,
				detail: detail
			});
			wordActions.operateActions.addItem(data);
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
		var hashObj = router.getHashObject();

		UE.getEditor('article');
		if(hashObj.handle == "edit") {
			wordActions.showActions.getWord({id: hashObj.id});
		}
	},
	componentDidUpdate: function() {
		var hashObj = router.getHashObject();

		if(hashObj.handle == "edit") {
			UE.getEditor('article').setContent(this.state.detail);
		}
	},
	componentWillUnmount: function() {
		UE.delEditor("article");
		$("#edui_fixedlayer").remove();
	},
	render: function() {
		return (
			<div className = "content">
				<div className = "content-hd">
					<div className = "m-code">
						<input value={this.state.name} onChange={this.handleChange} type="text" className="title" placeholder="请输入文章标题！" />
						<span className="base-btn save-btn" onClick={this.saveArticle} >保存</span>
						<span className="base-btn save-btn" onClick={this.dropAndBack}>返回</span>
					</div>
				</div>
				<div className = "content-bd">
					<div className = "edit-detail">
						<div id="article" type="text/plain" style = {{width: this.state.containerWidth, height: this.state.containerHeight}}></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Operator;