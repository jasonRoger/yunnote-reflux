var Menu = antd.Menu,
	Modal = antd.Modal,
	Alert = antd.Alert,
	Dropdown = antd.Dropdown;

var userActions = require("./action.es6"),
	userStore = require("./store.es6");

var User = React.createClass({
	mixins: [Reflux.listenTo(userStore.operateStore, "onOperateStatus")],
	getInitialState: function() {
		return {
			errmsg: "",
			modalVisible: false,
		};
	},
	onOperateStatus: function(res) {
		if(res && res.ret) {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
			this.refs.oldPassword.getDOMNode().value = '';
			this.refs.password.getDOMNode().value = '';
			this.refs.passwordAgain.getDOMNode().value = '';
		}else {
			this.setState({
				errmsg: res.errmsg
			});
		}
	},
	userManage: function(e) {
		if(e.key == 0) {
			this.setState({
				modalVisible: true
			});
		}else if(e.key == 1) {
			location.href = '/logout';
		}
	},
	handleCancel: function() {
		this.setState({
			errmsg: "",
			modalVisible: false
		});
	},
	handleSubmit: function() {
		this.validateData() ? this.submitData() : "";
	},
	handleEnter: function(e) {
		if(e.keyCode == 13) {
			this.handleSubmit();
		};
	},
	submitData: function() {
		var data = JSON.stringify({
			oldPassword: this.refs.oldPassword.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		});

		userActions.operateActions.updateItem(data);
	},
	validateData: function() {
		var oldPassword = this.refs.oldPassword.getDOMNode().value.trim(),
			password = this.refs.password.getDOMNode().value.trim(),
			passwordAgain = this.refs.passwordAgain.getDOMNode().value.trim();

		if(oldPassword == "") {
			this.setState({
				errmsg: "旧密码不得为空！"
			});
			return false;
		}
		if(!/\w/.test(oldPassword)) {
			this.setState({
				errmsg: "旧密码必须由数字、字母和下划线组成！"
			});
			return false;
		}
		if(password == "") {
			this.setState({
				errmsg: "新密码不得为空！"
			});
			return false;
		}
		if(!/\w/.test(password)) {
			this.setState({
				errmsg: "新密码必须由数字、字母和下划线组成！"
			});
			return false;
		}
		if(!/\w{6}/.test(password)) {
			this.setState({
				errmsg: "新密码不得低于6位！"
			});
			return false;
		}
		if(passwordAgain == "") {
			this.setState({
				errmsg: "确认密码不得为空！"
			});
			return false;
		}
		if(passwordAgain != password) {
			this.setState({
				errmsg: "密码与确认密码不一致！"
			});
			return false;
		}
		return true;
	},
	render: function() {
		const menu = (<Menu onClick={this.userManage}>
			<Menu.Item key="0">修改密码</Menu.Item>
			<Menu.Item key="1">退出</Menu.Item>
		</Menu>);

		return (
			<div>
				<Dropdown overlay={menu}>
					<div className = "ui-user-manage">
						<i className='iconfont icon-user-manage'></i>
					</div>
				</Dropdown>
				<Modal title = '修改密码'
					visible = {this.state.modalVisible}
					onOk = {this.handleSubmit}
					onCancel = {this.handleCancel}>
					<div className='m-user'>
						<div className='ui-item ui-error' style = {{display: this.state.errmsg ? "block" : "none"}}>
							<span className='ui-text'>{this.state.errmsg}</span>
						</div>
						<div className='ui-item'>
							<label className='ui-label'><i className='iconfont icon-password'></i></label>
							<input className='ui-input' onKeyUp={this.handleEnter} ref='oldPassword' type='password' placeholder='请输入旧密码' />
						</div>
						<div className='ui-item'>
							<label className='ui-label'><i className='iconfont icon-password'></i></label>
							<input className='ui-input' onKeyUp={this.handleEnter} ref='password' type='password' placeholder='请输入新密码' />
						</div>
						<div className='ui-item'>
							<label className='ui-label'><i className='iconfont icon-password-again'></i></label>
							<input className='ui-input' onKeyUp={this.handleEnter} ref='passwordAgain' type='password' placeholder='请输入确认密码' />
						</div>
					</div>
				</Modal>
			</div>
		);
	}
});

module.exports = User;