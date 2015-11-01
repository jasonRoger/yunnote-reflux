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
	handleLogin: function() {
		this.validateData() ? this.submitData() : "";
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
				<div style = {{display: this.state.errmsg ? "block" : "none"}}>
					<span className='ui-error'>{this.state.errmsg}</span>
				</div>
				<div className='ui-form'>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-user'></i></label>
						<input className='ui-input' ref='username' type='text' placeholder='请输入用户名' />
					</div>
					<div className='ui-item'>
						<label className='ui-label'><i className='iconfont icon-password'></i></label>
						<input className='ui-input' ref='password' type='password' placeholder='请输入密码' />
					</div>
					<span className='ui-submit base-btn' onClick={this.handleLogin}>登录</span>
				</div>
			</div>
		);
	}
});

export default Login;
