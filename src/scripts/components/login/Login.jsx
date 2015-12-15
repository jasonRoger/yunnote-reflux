var loginActions = require("./action.es6"),
	loginStore = require("./store.es6");

var Login = React.createClass({
	mixins: [Reflux.listenTo(loginStore.operateStore, "onOperateStatus")],
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
	redirectToReg: function() {
		location.href = '/reg';
	},
	handleLogin: function() {
		this.validateData() ? this.submitData() : "";
	},
	handleEnter: function(e) {
		if(e.keyCode == 13) {
			this.handleLogin();
		};
	},
	submitData: function() {
		var data = JSON.stringify({
			username: this.refs.username.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		});

		loginActions.operateActions.checkLogin(data);
	},
	validateData: function() {
		var username = this.refs.username.getDOMNode().value,
			password = this.refs.password.getDOMNode().value;

		if(username == "") {
			this.setState({
				errmsg: "用户名不得为空！"
			});
			return false;
		}
		if(password == "") {
			this.setState({
				errmsg: "密码不得为空！"
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
						<span className='ui-text'>登录足迹屋</span>
					</div>
					<div className='ui-item ui-error' style = {{display: this.state.errmsg ? "block" : "none"}}>
						<span className='ui-text'>{this.state.errmsg}</span>
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-user'></i></label>
						<input className='ui-input' ref='username' onKeyUp={this.handleEnter} type='text' placeholder='请输入用户名' />
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-password'></i></label>
						<input className='ui-input' ref='password' onKeyUp={this.handleEnter} type='password' name='password' placeholder='请输入密码' />
					</div>
					<div className='ui-item'>
						<span className='ui-submit base-btn' onClick={this.handleLogin}>登录</span>
					</div>
					<div className='ui-item ui-footer'>
						<span className='ui-text'>记录生活的点点滴滴。。。</span>
						<span className='ui-reg' onClick={this.redirectToReg}>免费注册</span>
					</div>
				</div>
			</div>
		);
	}
});

export default Login;
