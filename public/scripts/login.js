/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140);


/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(65)["default"];

	var _componentsLoginLoginJsx = __webpack_require__(141);

	var _componentsLoginLoginJsx2 = _interopRequireDefault(_componentsLoginLoginJsx);

	React.render(React.createElement(_componentsLoginLoginJsx2["default"], null), document.getElementById("app"));

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var loginActions = __webpack_require__(142),
	    loginStore = __webpack_require__(143);

	var Login = React.createClass({
		displayName: "Login",

		mixins: [Reflux.listenTo(loginStore.operateStore, "onOperateStatus")],
		getInitialState: function getInitialState() {
			return {
				errmsg: ''
			};
		},
		onOperateStatus: function onOperateStatus(res) {
			if (res && res.ret) {
				location.href = '/';
			} else {
				this.setState({
					errmsg: res.errmsg
				});
			}
		},
		redirectToReg: function redirectToReg() {
			location.href = '/reg';
		},
		handleLogin: function handleLogin() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			if (e.keyCode == 13) {
				this.handleLogin();
			};
		},
		submitData: function submitData() {
			var data = JSON.stringify({
				username: this.refs.username.getDOMNode().value,
				password: this.refs.password.getDOMNode().value
			});

			loginActions.operateActions.checkLogin(data);
		},
		validateData: function validateData() {
			var username = this.refs.username.getDOMNode().value,
			    password = this.refs.password.getDOMNode().value;

			if (username == "") {
				this.setState({
					errmsg: "用户名不得为空！"
				});
				return false;
			}
			if (password == "") {
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
		render: function render() {
			return React.createElement(
				"div",
				{ className: "m-login" },
				React.createElement(
					"div",
					{ className: "ui-form" },
					React.createElement(
						"div",
						{ className: "ui-item ui-header" },
						React.createElement(
							"span",
							{ className: "ui-text" },
							"登录云笔记"
						)
					),
					React.createElement(
						"div",
						{ className: "ui-item ui-error", style: { display: this.state.errmsg ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "ui-text" },
							this.state.errmsg
						)
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"label",
							{ className: "ui-label" },
							React.createElement("i", { className: "iconfont icon-user" })
						),
						React.createElement("input", { className: "ui-input", ref: "username", onKeyUp: this.handleEnter, type: "text", placeholder: "请输入用户名" })
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"label",
							{ className: "ui-label" },
							React.createElement("i", { className: "iconfont icon-password" })
						),
						React.createElement("input", { className: "ui-input", ref: "password", onKeyUp: this.handleEnter, type: "password", name: "password", placeholder: "请输入密码" })
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"span",
							{ className: "ui-submit base-btn", onClick: this.handleLogin },
							"登录"
						)
					),
					React.createElement(
						"div",
						{ className: "ui-item ui-footer" },
						React.createElement(
							"span",
							{ className: "ui-text" },
							"记录生活的点点滴滴。。。"
						),
						React.createElement(
							"span",
							{ className: "ui-reg", onClick: this.redirectToReg },
							"免费注册"
						)
					)
				)
			);
		}
	});

	exports["default"] = Login;
	module.exports = exports["default"];

/***/ },

/***/ 142:
/***/ function(module, exports) {

	//操作导航数据action
	"use strict";

	var operateActions = Reflux.createActions(["checkLogin"]);

	module.exports = {
		operateActions: operateActions
	};

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var loginActions = __webpack_require__(142);

	var URL = {
		CHECKLOGIN: "/api/checkLogin.json"
	};

	var operateStore = Reflux.createStore({
		listenables: [loginActions.operateActions],
		onCheckLogin: function onCheckLogin(params) {
			var self = this;
			ajax({
				url: URL.CHECKLOGIN,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		}
	});

	module.exports = {
		operateStore: operateStore
	};

/***/ }

/******/ });