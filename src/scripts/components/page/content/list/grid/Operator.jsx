var React = require('react'),
	Reflux = require("reflux"),
	antd = require('antd'),
	Modal = antd.Modal,
	Alert = antd.Alert,
	listActions = require("./action.es6"),
	listStore = require("./store.es6"),
	ContextMenu = require("../../../../lib/contextMenu/index.jsx");

var Operator = React.createClass({
	mixins: [Reflux.listenTo(listStore.operateStore, "onOperateStatus")],
	getInitialState: function() {
		return {
			errmsg: "",
			modalVisible: false,
			modalTitle: "",
			placeholder: "",
			InputVal: "",
			menuRefData : {}
		};
	},
	onOperateStatus: function(res) {
		var hashObj = router.getHashObject();

		if(res.type && res.type == "delete") {
			return listActions.showActions.getList({
				level: parseInt(hashObj.level) + 1,
				pid: hashObj.id
			});
		}

		if(res && res.ret) {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
			listActions.showActions.getList({
				level: parseInt(hashObj.level) + 1,
				pid: hashObj.id
			});
		}else {
			this.setState({
				errmsg: res.errmsg
			});
		}
	},
	addFolder: function() {
		this.setState({
			modalVisible: true,
			modalTitle: "新建文件夹",
			placeholder: "请输入文件夹名字！",
			InputVal: "",
			menuRefData: {}
		}, function() {
			this.refs.InputRef.getDOMNode().focus();
		});
	},
	//添加word文件的操作通过hash传递给word组件处理
	addWord: function() {
		router.replaceHash({
			type: "word",
			handle: "add"
		},this);
	},
	//上传的操作通过hash传递给pdf组件处理
	upload: function() {
		router.replaceHash({
			type: "pdf",
			handle: "upload"
		},this);
	},
	//添加code文件的操作通过hash传递给code组件处理
	addCode: function() {
		router.replaceHash({
			type: "code",
			handle: "add"
		},this);
	},
	//添加markdown的操作通过hash传递给markdown组件处理
	addMarkdown: function() {
		router.replaceHash({
			type: "markdown",
			handle: "add"
		},this);
	},
	rename: function() {
		this.setState({
			modalVisible: true,
			modalTitle: "重命名",
			placeholder: "请输入新的名字！",
			menuRefData: this.props.menuRefData,
			InputVal: this.props.menuRefData.fileName
		}, function() {
			this.refs.InputRef.getDOMNode().focus();
		});
	},
	deleteFile: function() {
		var self = this;
		var menuRefData = this.props.menuRefData;

		antd.Modal.confirm({
		    title: '您是否确认要删除这项内容！',
		    onOk: function() {
		    	listActions.operateActions.deleteItem({ id: menuRefData.fileId, type: menuRefData.fileType });
		    },
		    onCancel: function() {}
		});
	},
	submitData: function() {
		var data = {},
			menuRefData = this.state.menuRefData,
			hashObj = router.getHashObject();

		//fileId存在则是重命名操作，否则则为添加
		if(menuRefData.fileId) {
			data = JSON.stringify({ id: menuRefData.fileId, type: menuRefData.fileType, name: this.state.InputVal });
			listActions.operateActions.renameItem(data);
		}else {
			data = JSON.stringify({
				pid: hashObj.id,
				type: "folder",
				level: parseInt(hashObj.level) + 1,
				name: this.state.InputVal
			});
			listActions.operateActions.addItem(data);
		}
	},
	validateData: function() {
		var InputVal = this.state.InputVal;
		if(InputVal == "") {
			this.setState({
				errmsg: "新的名字不得为空！"
			});
			return false;
		}else {
			this.setState({
				errmsg: ""
			});
			return true;
		}
	},
	handleChange: function(e) {
		this.setState({
			InputVal: e.target.value.trim()
		});
	},
	handleOk: function() {
		this.validateData() ? this.submitData() : "";
	},
	handleEnter: function(e) {
		e.keyCode == 13 && this.validateData() ? this.submitData() : "";
	},
	handleCancel: function() {
		this.setState({
			errmsg: "",
			modalVisible: false
		});
	},
	componentWillUnmount: function() {
		ContextMenu.unMount(["createFile", "operateFile"]);
	},
	render: function() {
		return (
			<div>
				<Modal title = {this.state.modalTitle}
					visible = {this.state.modalVisible}
					onOk = {this.handleOk}
					onCancel = {this.handleCancel}>
					<div style = {{display: this.state.errmsg ? "block" : "none"}}>
						<Alert message = {this.state.errmsg} type = "error"/>
					</div>
					<input ref = "InputRef"
						type = "text"
						className = "dialog-text"
						value = {this.state.InputVal}
						onKeyUp = {this.handleEnter}
						onChange = {this.handleChange}
						placeholder = {this.state.placeholder} />
				</Modal>
				<ContextMenu target = "js-content-bd,path,js-cell-hd,layout-table"
						menuId = "createFile"
						showMenus = {["addFile", "addMarkdown", "addFolder", "upload", "addCode"]}
						addFile = {this.addWord}
						addCode = {this.addCode}
						addMarkdown = {this.addMarkdown}
						addFolder = {this.addFolder}
						upload = {this.upload} />
				<ContextMenu target="js-cell"
						menuId = "operateFile"
						showMenus = {["rename", "delete"]}
						rename = {this.rename}
						delete = {this.deleteFile} />
			</div>
		);
	}
});

module.exports = Operator;
