var Modal = antd.Modal,
	Alert = antd.Alert,
	navActions = require("./action.es6"),
	navStore = require("./store.es6"),
	ContextMenu = require("../../lib/contextMenu/index.jsx");

var Operator = React.createClass({
	mixins: [Reflux.listenTo(navStore.operateStore, "onOperateStatus")],
	getInitialState: function() {
		return {
			errmsg: "",
			modalVisible: false,
			modalTitle: "",
			placeholder: "",
			themeVal: "",
			menuRefData : {}
		};
	},
	onOperateStatus: function(res) {
		if(res.type && res.type == "delete") return navActions.showActions.getAll();

		if(res && res.ret) {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
			navActions.showActions.getAll();
		}else {
			this.setState({
				errmsg: res.errmsg
			});
		}
	},
	addNav: function() {
		this.setState({
			modalVisible: true,
			modalTitle: "添加主题",
			placeholder: "请输入您的主题！",
			themeVal: "",
			menuRefData: {}
		}, function() {
			this.refs.theme.getDOMNode().focus();
		});
	},
	updateNav: function() {
		this.setState({
			modalVisible: true,
			modalTitle: "修改主题",
			placeholder: "请输入您的主题！",
			menuRefData: this.props.menuRefData,
			themeVal: this.props.menuRefData.navItemName
		}, function() {
			this.refs.theme.getDOMNode().focus();
		});
	},
	deleteNav: function() {
		var self = this;
		var menuRefData = this.props.menuRefData;

		antd.Modal.confirm({
		    title: '您是否确认要删除这项内容！',
		    onOk: function() {
		    	navActions.operateActions.deleteItem({ id: menuRefData.navItemId });
		    },
		    onCancel: function() {}
		  });
	},
	submitData: function() {
		var data = {},
			menuRefData = this.state.menuRefData;
		//navItemId存在则是修改操作，否则则为添加
		if(menuRefData.navItemId) {
			data = { id: menuRefData.navItemId, theme: this.state.themeVal };
			navActions.operateActions.updateItem(data);
		}else {
			data = { theme: this.state.themeVal };
			navActions.operateActions.addItem(data);
		}
	},
	validateData: function() {
		var themeVal = this.state.themeVal;
		if(themeVal == "") {
			this.setState({
				errmsg: "主题不得为空！"
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
			themeVal: e.target.value.trim()
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
		ContextMenu.unMount(["operateNav"]);
	},
	render: function() {
		return (
			<div>
				<div className = "sidebar-add-list">
					<a href = "javascript:void(0);" onClick = {this.addNav}>+</a>
					<Modal title = {this.state.modalTitle}
						visible = {this.state.modalVisible}
						onOk = {this.handleOk}
						onCancel = {this.handleCancel}>
						<div style = {{display: this.state.errmsg ? "block" : "none"}}>
							<Alert message = {this.state.errmsg} type = "error"/>
						</div>
						<input ref = "theme"
							type = "text"
							className = "dialog-text"
							value = {this.state.themeVal}
							onKeyUp = {this.handleEnter}
							onChange = {this.handleChange}
							placeholder = {this.state.placeholder} />
					</Modal>
				</div>
				<ContextMenu target = "js-nav-item"
						menuId = "operateNav"
						showMenus = {["edit", "delete"]}
						edit = {this.updateNav}
						delete = {this.deleteNav} />
			</div>
		);
	}
});

module.exports = Operator;
