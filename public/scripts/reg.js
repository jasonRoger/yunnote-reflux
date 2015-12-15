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

	module.exports = __webpack_require__(144);


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

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(65)["default"];

	var _componentsRegRegJsx = __webpack_require__(145);

	var _componentsRegRegJsx2 = _interopRequireDefault(_componentsRegRegJsx);

	React.render(React.createElement(_componentsRegRegJsx2["default"], null), document.getElementById("app"));

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var regActions = __webpack_require__(146),
	    regStore = __webpack_require__(147);

	var Login = React.createClass({
		displayName: "Login",

		mixins: [Reflux.listenTo(regStore.operateStore, "onOperateStatus")],
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
		redirectToLogin: function redirectToLogin() {
			location.href = '/login';
		},
		handleReg: function handleReg() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			if (e.keyCode == 13) {
				this.handleReg();
			};
		},
		submitData: function submitData() {
			var data = JSON.stringify({
				username: this.refs.username.getDOMNode().value,
				password: this.refs.password.getDOMNode().value
			});

			regActions.operateActions.addItem(data);
		},
		validateData: function validateData() {
			var username = this.refs.username.getDOMNode().value.trim(),
			    password = this.refs.password.getDOMNode().value.trim(),
			    passwordAgain = this.refs.passwordAgain.getDOMNode().value.trim();

			if (username == "") {
				this.setState({
					errmsg: "用户名不得为空！"
				});
				return false;
			}
			if (!/\w/.test(username)) {
				this.setState({
					errmsg: "用户名必须由数字、字母和下划线组成！"
				});
				return false;
			}
			if (password == "") {
				this.setState({
					errmsg: "密码不得为空！"
				});
				return false;
			}
			if (!/\w/.test(password)) {
				this.setState({
					errmsg: "密码必须由数字、字母和下划线组成！"
				});
				return false;
			}
			if (!/\w{6}/.test(password)) {
				this.setState({
					errmsg: "密码不得低于6位！"
				});
				return false;
			}
			if (passwordAgain == "") {
				this.setState({
					errmsg: "确认密码不得为空！"
				});
				return false;
			}
			if (passwordAgain != password) {
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
						React.createElement("input", { className: "ui-input", onKeyUp: this.handleEnter, ref: "username", type: "text", placeholder: "请输入用户名" })
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"label",
							{ className: "ui-label" },
							React.createElement("i", { className: "iconfont icon-password" })
						),
						React.createElement("input", { className: "ui-input", onKeyUp: this.handleEnter, ref: "password", type: "password", placeholder: "请输入密码" })
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"label",
							{ className: "ui-label" },
							React.createElement("i", { className: "iconfont icon-password-again" })
						),
						React.createElement("input", { className: "ui-input", onKeyUp: this.handleEnter, ref: "passwordAgain", type: "password", placeholder: "请输入确认密码" })
					),
					React.createElement(
						"div",
						{ className: "ui-item" },
						React.createElement(
							"a",
							{ className: "ui-submit base-btn", onClick: this.handleReg },
							"注册"
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
							"a",
							{ className: "ui-reg", onClick: this.redirectToLogin },
							"已有账户，登录"
						)
					)
				)
			);
		}
	});

	exports["default"] = Login;
	module.exports = exports["default"];

/***/ },

/***/ 146:
/***/ function(module, exports) {

	//操作导航数据action
	"use strict";

	var operateActions = Reflux.createActions(["addItem"]);

	module.exports = {
		operateActions: operateActions
	};

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var regActions = __webpack_require__(146);

	var URL = {
		ADDITEM: "/api/addUser.json"
	};

	var operateStore = Reflux.createStore({
		listenables: [regActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;
			ajax({
				url: URL.ADDITEM,
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