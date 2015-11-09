var regActions = require("./action.es6"),
	regStore = require("./store.es6");

var Login = React.createClass({
	mixins: [Reflux.listenTo(regStore.operateStore, "onOperateStatus")],
	getInitialState: function() {
		return {
			errmsg: ''
		}
	},
	onOperateStatus: function(res) {
		if(res && res.ret) {
			location.href = '/';
		}else {
			this.setState({
				errmsg: res.errmsg
			});
		}
	},
	redirectToLogin: function() {
		location.href = '/login';
	},
	handleReg: function() {
		this.validateData() ? this.submitData() : "";
	},
	handleEnter: function(e) {
		if(e.keyCode == 13) {
			this.handleReg();
		};
	},
	submitData: function() {
		var data = JSON.stringify({
			username: this.refs.username.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		});

		regActions.operateActions.addItem(data);
	},
	validateData: function() {
		var username = this.refs.username.getDOMNode().value.trim(),
			password = this.refs.password.getDOMNode().value.trim(),
			passwordAgain = this.refs.passwordAgain.getDOMNode().value.trim();

		if(username == "") {
			this.setState({
				errmsg: "用户名不得为空！"
			});
			return false;
		}
		if(!/\w/.test(username)) {
			this.setState({
				errmsg: "用户名必须由数字、字母和下划线组成！"
			});
			return false;
		}
		if(password == "") {
			this.setState({
				errmsg: "密码不得为空！"
			});
			return false;
		}
		if(!/\w/.test(password)) {
			this.setState({
				errmsg: "密码必须由数字、字母和下划线组成！"
			});
			return false;
		}
		if(!/\w{6}/.test(password)) {
			this.setState({
				errmsg: "密码不得低于6位！"
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

		this.setState({
			errmsg: ""
		});
		return true;
	},
	render: function() {
		return (
			<div className='m-login'>
				<div className='ui-form'>
					<div className='ui-item ui-header'>
						<span className='ui-text'>登录云笔记</span>
					</div>
					<div className='ui-item ui-error' style = {{display: this.state.errmsg ? "block" : "none"}}>
						<span className='ui-text'>{this.state.errmsg}</span>
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-user'></i></label>
						<input className='ui-input' onKeyUp={this.handleEnter} ref='username' type='text' placeholder='请输入用户名' />
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-password'></i></label>
						<input className='ui-input' onKeyUp={this.handleEnter} ref='password' type='password' placeholder='请输入密码' />
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-password-again'></i></label>
						<input className='ui-input' onKeyUp={this.handleEnter} ref='passwordAgain' type='password' placeholder='请输入确认密码' />
					</div>
					<div className='ui-item'>
						<a className='ui-submit base-btn' onClick={this.handleReg}>注册</a>
					</div>
					<div className='ui-item ui-footer'>
						<span className='ui-text'>记录生活的点点滴滴。。。</span>
						<a className='ui-reg' onClick={this.redirectToLogin}>已有账户，登录</a>
					</div>
				</div>
			</div>
		);
	}
});

export default Login;
