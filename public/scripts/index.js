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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(65)["default"];

	var _componentsNoteAppJsx = __webpack_require__(66);

	var _componentsNoteAppJsx2 = _interopRequireDefault(_componentsNoteAppJsx);

	React.render(React.createElement(_componentsNoteAppJsx2["default"], null), document.getElementById("app"));

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(67)["default"];

	var _inherits = __webpack_require__(81)["default"];

	var _createClass = __webpack_require__(92)["default"];

	var _classCallCheck = __webpack_require__(95)["default"];

	var _interopRequireDefault = __webpack_require__(65)["default"];

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _pageIndexJsx = __webpack_require__(96);

	var _pageIndexJsx2 = _interopRequireDefault(_pageIndexJsx);

	var NoteApp = (function (_React$Component) {
		_inherits(NoteApp, _React$Component);

		function NoteApp() {
			_classCallCheck(this, NoteApp);

			_get(Object.getPrototypeOf(NoteApp.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(NoteApp, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "wrapper" },
					React.createElement(_pageIndexJsx2["default"], null)
				);
			}
		}]);

		return NoteApp;
	})(React.Component);

	exports["default"] = NoteApp;
	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getOwnPropertyDescriptor = __webpack_require__(68);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

	exports.__esModule = true;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(70);
	__webpack_require__(71);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(72);

	__webpack_require__(76)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(73)
	  , defined = __webpack_require__(75);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(74);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $def  = __webpack_require__(77)
	  , core  = __webpack_require__(79)
	  , fails = __webpack_require__(80);
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(77)
	    , fn   = (core.Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(78)
	  , core      = __webpack_require__(79)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 78 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 79 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.4'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _setPrototypeOf = __webpack_require__(82);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(90);

	var _create2 = _interopRequireDefault(_create);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84);
	module.exports = __webpack_require__(79).Object.setPrototypeOf;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(77);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(85).set});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(70).getDesc
	  , isObject = __webpack_require__(86)
	  , anObject = __webpack_require__(87);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(88)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(86);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(89);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(70);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(93)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(70);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Navigator = __webpack_require__(97);
	var Content = __webpack_require__(105);

	var Page = React.createClass({
		displayName: "Page",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "page" },
				React.createElement(Navigator, null),
				React.createElement(Content, null)
			);
		}
	});

	module.exports = Page;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var List = __webpack_require__(98),
	    Operator = __webpack_require__(102);

	var Navigator = React.createClass({
		displayName: "Navigator",

		getInitialState: function getInitialState() {
			return {
				menuRefData: {}
			};
		},
		contextMenuInit: function contextMenuInit(data) {
			this.setState({
				menuRefData: data
			});
		},
		render: function render() {
			return React.createElement(
				"aside",
				{ className: "aside" },
				React.createElement(
					"div",
					{ className: "sidebar" },
					React.createElement(Operator, { menuRefData: this.state.menuRefData }),
					React.createElement(List, { setActiveStatus: this.setActiveStatus,
						contextMenuInit: this.contextMenuInit })
				)
			);
		}
	});

	module.exports = Navigator;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Item = __webpack_require__(99),
	    navActions = __webpack_require__(100),
	    navStore = __webpack_require__(101);

	var List = React.createClass({
		displayName: "List",

		mixins: [Reflux.listenTo(navStore.showStore, "onUpdateList")],
		getInitialState: function getInitialState() {
			return {
				list: []
			};
		},
		onUpdateList: function onUpdateList(data) {
			var routerObj = router.getHashObject();
			this.setState({
				list: data.list
			});
			//如果初始url不带id则默认展示第一个导航信息，否则展示url对应的信息
			if (routerObj.id && data.isIdExist) {
				router.replaceHash({ id: "" });
				router.replaceHash({ id: routerObj.id });
			} else {
				if (data.list.length < 1) return;
				router.setHash({ level: 0, type: "folder", handle: "show", id: data.list[0].id, src: "" });
			}
		},
		setActiveStatus: function setActiveStatus(navItem) {
			var navList = this.state.list;
			var activedItem = {};

			var newList = navList.map(function (item, index) {
				if (item.id == navItem.navItemId) {
					item.isActived = true;
					activedItem = item;
				} else {
					item.isActived = false;
				}
				return item;
			});

			this.setState({
				list: newList
			});
			router.replaceHash({ level: 0, id: navItem.navItemId, type: "folder", handle: "show", src: "" });
		},
		componentDidMount: function componentDidMount() {
			navActions.showActions.getAll(router.getHashObject());
		},
		render: function render() {
			var list = this.state.list;
			var itemComps = list.map((function (item, index) {
				return React.createElement(Item, { key: item.id,
					itemInfo: item,
					setActiveStatus: this.setActiveStatus,
					contextMenuInit: this.props.contextMenuInit });
			}).bind(this));

			return React.createElement(
				"ul",
				{ className: "sidebar-list" },
				itemComps
			);
		}
	});

	module.exports = List;

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";

	var Item = React.createClass({
		displayName: "Item",

		setActiveStatus: function setActiveStatus(e) {
			this.props.setActiveStatus(e.target.dataset);
		},
		contextMenuInit: function contextMenuInit(e) {
			if (e.button == 2) {
				var dataset = e.target.dataset;
				this.props.contextMenuInit(dataset);
			}
		},
		render: function render() {
			var itemInfo = this.props.itemInfo;

			return React.createElement(
				"li",
				{ className: itemInfo.isActived ? "selected" : "" },
				React.createElement(
					"a",
					{ href: "javascript:void(0);",
						onMouseUp: this.contextMenuInit,
						className: "js-nav-item",
						onClick: this.setActiveStatus,
						"data-nav-item-name": itemInfo.name,
						"data-nav-item-id": itemInfo.id },
					itemInfo.name
				)
			);
		}

	});

	module.exports = Item;

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	var showActions = Reflux.createActions(["getAll"]);
	//操作导航数据action
	var operateActions = Reflux.createActions(["addItem", "updateItem", "deleteItem"]);

	module.exports = {
			showActions: showActions,
			operateActions: operateActions
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    navActions = __webpack_require__(100);

	var URL = {
		LIST: "/render/navList.json",
		ADD: "/api/addNav.json",
		UPDATE: "/api/updateNav.json",
		DELETE: "/api/deleteNav.json"
	};

	var showStore = Reflux.createStore({
		listenables: [navActions.showActions],
		onGetAll: function onGetAll(params) {
			var self = this;
			//请求导航列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	var operateStore = Reflux.createStore({
		listenables: [navActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;

			ajax({
				url: URL.ADD,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onUpdateItem: function onUpdateItem(params) {
			var self = this;

			ajax({
				url: URL.UPDATE,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onDeleteItem: function onDeleteItem(params) {
			var self = this;

			ajax({
				url: URL.DELETE,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, type: "delete", data: data });
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: "对不起，删除失败！"
				});
			});
		}
	});

	module.exports = {
		showStore: showStore,
		operateStore: operateStore
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    Alert = antd.Alert,
	    navActions = __webpack_require__(100),
	    navStore = __webpack_require__(101),
	    ContextMenu = __webpack_require__(103);

	var Operator = React.createClass({
		displayName: "Operator",

		mixins: [Reflux.listenTo(navStore.operateStore, "onOperateStatus")],
		getInitialState: function getInitialState() {
			return {
				errmsg: "",
				modalVisible: false,
				modalTitle: "",
				placeholder: "",
				themeVal: "",
				menuRefData: {}
			};
		},
		onOperateStatus: function onOperateStatus(res) {
			if (res.type && res.type == "delete") return navActions.showActions.getAll();

			if (res && res.ret) {
				this.setState({
					errmsg: "",
					modalVisible: false
				});
				navActions.showActions.getAll(router.getHashObject());
			} else {
				this.setState({
					errmsg: res.errmsg
				});
			}
		},
		addNav: function addNav() {
			this.setState({
				modalVisible: true,
				modalTitle: "添加主题",
				placeholder: "请输入您的主题！",
				themeVal: "",
				menuRefData: {}
			}, function () {
				this.refs.theme.getDOMNode().focus();
			});
		},
		updateNav: function updateNav() {
			this.setState({
				modalVisible: true,
				modalTitle: "修改主题",
				placeholder: "请输入您的主题！",
				menuRefData: this.props.menuRefData,
				themeVal: this.props.menuRefData.navItemName
			}, function () {
				this.refs.theme.getDOMNode().focus();
			});
		},
		deleteNav: function deleteNav() {
			var self = this;
			var menuRefData = this.props.menuRefData;

			antd.Modal.confirm({
				title: '您是否确认要删除这项内容！',
				onOk: function onOk() {
					navActions.operateActions.deleteItem({ id: menuRefData.navItemId });
				},
				onCancel: function onCancel() {}
			});
		},
		submitData: function submitData() {
			var data = {},
			    menuRefData = this.state.menuRefData;
			//navItemId存在则是修改操作，否则则为添加
			if (menuRefData.navItemId) {
				data = { id: menuRefData.navItemId, theme: this.state.themeVal };
				navActions.operateActions.updateItem(data);
			} else {
				data = { theme: this.state.themeVal };
				navActions.operateActions.addItem(data);
			}
		},
		validateData: function validateData() {
			var themeVal = this.state.themeVal;
			if (themeVal == "") {
				this.setState({
					errmsg: "主题不得为空！"
				});
				return false;
			} else {
				this.setState({
					errmsg: ""
				});
				return true;
			}
		},
		handleChange: function handleChange(e) {
			this.setState({
				themeVal: e.target.value.trim()
			});
		},
		handleOk: function handleOk() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			e.keyCode == 13 && this.validateData() ? this.submitData() : "";
		},
		handleCancel: function handleCancel() {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			ContextMenu.unMount(["operateNav"]);
		},
		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "sidebar-add-list" },
					React.createElement(
						"a",
						{ href: "javascript:void(0);", onClick: this.addNav },
						"+"
					),
					React.createElement(
						Modal,
						{ title: this.state.modalTitle,
							visible: this.state.modalVisible,
							onOk: this.handleOk,
							onCancel: this.handleCancel },
						React.createElement(
							"div",
							{ style: { display: this.state.errmsg ? "block" : "none" } },
							React.createElement(Alert, { message: this.state.errmsg, type: "error" })
						),
						React.createElement("input", { ref: "theme",
							type: "text",
							className: "dialog-text",
							value: this.state.themeVal,
							onKeyUp: this.handleEnter,
							onChange: this.handleChange,
							placeholder: this.state.placeholder })
					)
				),
				React.createElement(ContextMenu, { target: "js-nav-item",
					menuId: "operateNav",
					showMenus: ["edit", "delete"],
					edit: this.updateNav,
					"delete": this.deleteNav })
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var MenuList = __webpack_require__(104);
	window.targetSelector = window.targetSelector ? window.targetSelector : [];
	window.menuIds = window.menuIds ? window.menuIds : [];

	var ContextMenu = React.createClass({
		displayName: "ContextMenu",

		statics: {
			unMount: function unMount(unMountTargets) {
				var index = -1,
				    menusDom = document.getElementsByClassName("widget-menu-wrapper");
				for (var i = 0; i < unMountTargets.length; i++) {
					index = menuIds.indexOf(unMountTargets[i]);
					if (index !== -1) {
						menuIds.splice(index, 1);
						targetSelector.splice(index, 1);
						document.body.removeChild(menusDom[index]);
					}
				}
			}
		},
		componentDidMount: function componentDidMount() {
			var target = this.props.target;

			if (!target || target && targetSelector.indexOf(target) != -1) return;
			var div = document.createElement("div");
			targetSelector.push(target);
			menuIds.push(this.props.menuId ? this.props.menuId : "normal" + Math.random());
			div.className = "widget-menu-wrapper";
			document.body.appendChild(div);
			React.render(React.createElement(MenuList, this.props), div);
		},
		render: function render() {
			return React.createElement("noscript", null);
		}
	});

	module.exports = ContextMenu;

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	var MenuList = React.createClass({
		displayName: "MenuList",

		getInitialState: function getInitialState() {
			var showMenus = this.props.showMenus ? this.props.showMenus : [];

			return {
				showAddFile: showMenus.indexOf("addFile") != -1 ? true : false,
				showAddFolder: showMenus.indexOf("addFolder") != -1 ? true : false,
				showAddCode: showMenus.indexOf("addCode") != -1 ? true : false,
				showMarkdown: showMenus.indexOf("addMarkdown") != -1 ? true : false,
				showEdit: showMenus.indexOf("edit") != -1 ? true : false,
				showRename: showMenus.indexOf("rename") != -1 ? true : false,
				showDelete: showMenus.indexOf("delete") != -1 ? true : false,
				showMove: showMenus.indexOf("move") != -1 ? true : false,
				showUpload: showMenus.indexOf("upload") != -1 ? true : false,
				showMenu: false,
				left: 0,
				top: 0
			};
		},
		componentDidMount: function componentDidMount() {
			var self = this;
			var targets = this.props.target.split(",");

			$(document).on('contextmenu', function (e) {
				for (var i = 0; i < targets.length; i++) {
					if ($(e.target).hasClass(targets[i])) {
						e.preventDefault();
						setTimeout(function () {
							self.setState({
								showMenu: true,
								left: e.clientX + 5 + "px",
								top: e.clientY + 5 + "px"
							});
						}, 100);
						return;
					}
				}
			});
			$(document).on("mouseup", function (e) {
				if (e.which == 1) {
					self.setState({
						showMenu: false
					});
				}
			});
		},
		addFile: function addFile(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.addFile ? this.props.addFile(menuInfo) : "";
		},
		upload: function upload(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.upload ? this.props.upload(menuInfo) : "";
		},
		addFolder: function addFolder(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.addFolder ? this.props.addFolder(menuInfo) : "";
		},
		addCode: function addCode(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.addCode ? this.props.addCode(menuInfo) : "";
		},
		addMarkdown: function addMarkdown(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.addCode ? this.props.addMarkdown(menuInfo) : "";
		},
		edit: function edit(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.edit ? this.props.edit(menuInfo) : "";
		},
		rename: function rename(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.rename ? this.props.rename(menuInfo) : "";
		},
		"delete": function _delete(e) {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props["delete"] ? this.props["delete"](menuInfo) : "";
		},
		move: function move() {
			var menuInfo = $(e.target).parents("li").get(0).dataset;

			this.setState({
				showMenu: false
			});
			this.props.move ? this.props.move(menuInfo) : "";
		},
		render: function render() {
			return React.createElement(
				"div",
				{ style: { position: "relative", left: 0, right: 0 } },
				React.createElement(
					"ul",
					{ className: "widget-menu js-widget-menu", style: { display: this.state.showMenu ? "block" : "none", left: this.state.left, top: this.state.top } },
					React.createElement(
						"li",
						{ "data-menu-type": "addMarkdown", "data-menu-type-text": "新建MD", onClick: this.addMarkdown, style: { display: this.state.showMarkdown ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-add-folder" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"新建MD"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "addCode", "data-menu-type-text": "新建代码", onClick: this.addCode, style: { display: this.state.showAddCode ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-add-file" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"新建代码"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "addFile", "data-menu-type-text": "新建文档", onClick: this.addFile, style: { display: this.state.showAddFile ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-add-folder" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"新建文档"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "upload", "data-menu-type-text": "上传文档", onClick: this.upload, style: { display: this.state.showUpload ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-upload" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"上传文档"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "addFolder", "data-menu-type-text": "新建文件夹", onClick: this.addFolder, style: { display: this.state.showAddFolder ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-add-file" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"新建文件夹"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "edit", "data-menu-type-text": "编辑", onClick: this.edit, style: { display: this.state.showEdit ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-add-file" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"编辑"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "rename", "data-menu-type-text": "重命名", onClick: this.rename, style: { display: this.state.showRename ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-rename" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"重命名"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "delete", "data-menu-type-text": "删除", onClick: this["delete"], style: { display: this.state.showDelete ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-delete" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"删除"
						),
						React.createElement("span", { className: "menu-mask" })
					),
					React.createElement(
						"li",
						{ "data-menu-type": "move", "data-menu-type-text": "移动", onClick: this.move, style: { display: this.state.showMove ? "block" : "none" } },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-move" },
								""
							)
						),
						React.createElement(
							"span",
							{ className: "menu-text" },
							"移动"
						),
						React.createElement("span", { className: "menu-mask" })
					)
				)
			);
		}
	});

	module.exports = MenuList;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var List = __webpack_require__(106),
	    Word = __webpack_require__(120),
	    Markdown = __webpack_require__(125),
	    Pdf = __webpack_require__(130),
	    Code = __webpack_require__(135);
	//组件映射，将根据hash的值来决定渲染特定的组件
	var RouteHandleCompMap = {
		list: List,
		word: Word,
		markdown: Markdown,
		pdf: Pdf,
		code: Code
	};

	var Content = React.createClass({
		displayName: "Content",

		getInitialState: function getInitialState() {
			return {
				type: "list"
			};
		},
		componentDidMount: function componentDidMount() {
			//添加路由监听函数，当hash改变时将执行注册的回调
			router.watchHashChange(function (hashObject, hashString) {
				this.setState({
					type: hashObject.type == "folder" ? "list" : hashObject.type
				});
			}, "typeWatcher", this);
		},
		render: function render() {
			var type = this.state.type,
			    RouteHandleComp = RouteHandleCompMap[type];

			return React.createElement(
				"div",
				{ className: "main" },
				React.createElement(RouteHandleComp, null)
			);
		}
	});

	module.exports = Content;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Path = __webpack_require__(107),
	    Grid = __webpack_require__(111),
	    User = __webpack_require__(117);

	var List = React.createClass({
		displayName: 'List',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'show-path' },
						React.createElement(
							'div',
							{ className: 'path-wrapper' },
							React.createElement(Path, null)
						),
						React.createElement(User, null)
					)
				),
				React.createElement(
					'div',
					{ className: 'js-content-bd content-bd' },
					React.createElement(Grid, null)
				),
				React.createElement('div', { className: 'content-ft' })
			);
		}

	});

	module.exports = List;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Item = __webpack_require__(108),
	    pathActions = __webpack_require__(109),
	    pathStore = __webpack_require__(110);

	var Path = React.createClass({
		displayName: "Path",

		mixins: [Reflux.connect(pathStore, "list")],
		getInitialState: function getInitialState() {
			return {
				list: []
			};
		},
		backList: function backList() {
			var pathList = this.state.list,
			    length = pathList.length,
			    prevPath = {};

			if (length < 2) return;
			prevPath = pathList[pathList.length - 2];
			router.replaceHash({
				level: prevPath.level,
				type: prevPath.type,
				handle: "show",
				id: prevPath.id
			});
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				pathActions.getPath(hashObj);
			}, "pathWatcher", this);
		},
		render: function render() {
			var pathList = this.state.list;

			var pathComps = pathList.map(function (item, index) {
				return React.createElement(Item, { key: item.id, itemInfo: item });
			});

			return React.createElement(
				"span",
				{ className: "path" },
				React.createElement(
					"span",
					{ className: "back-btn", onClick: this.backList },
					React.createElement(
						"cite",
						null,
						"返回上一级"
					)
				),
				React.createElement(
					"ul",
					{ className: "path-list" },
					pathComps
				)
			);
		}

	});

	module.exports = Path;

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";

	var Item = React.createClass({
		displayName: "Item",

		updateHash: function updateHash(e) {
			var dataset = e.target.dataset;

			router.replaceHash({
				level: dataset.pathLevel,
				type: dataset.pathType,
				handle: "show",
				id: dataset.pathId
			});
		},

		render: function render() {
			var itemInfo = this.props.itemInfo,
			    rootClass = itemInfo.level == 0 ? "root" : "";

			return React.createElement(
				"li",
				{ className: rootClass,
					onClick: this.updateHash,
					"data-path-id": itemInfo.id,
					"data-path-type": itemInfo.type,
					"data-path-level": itemInfo.level },
				itemInfo.name
			);
		}

	});

	module.exports = Item;

/***/ },
/* 109 */
/***/ function(module, exports) {

	//获取导航数据action
	"use strict";

	var pathActions = Reflux.createActions(["getPath"]);

	module.exports = pathActions;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    pathActions = __webpack_require__(109);

	var URL = {
		LIST: "/render/pathList.json"
	};

	var pathStore = Reflux.createStore({
		listenables: [pathActions],
		onGetPath: function onGetPath(params) {
			var self = this;
			//请求path列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	module.exports = pathStore;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var List = __webpack_require__(112),
	    Operator = __webpack_require__(116);

	var Grid = React.createClass({
		displayName: 'Grid',

		getInitialState: function getInitialState() {
			return {
				menuRefData: {}
			};
		},
		contextMenuInit: function contextMenuInit(data) {
			this.setState({
				menuRefData: data
			});
		},
		render: function render() {

			return React.createElement(
				'div',
				{ className: 'layout-table js-layout-table' },
				React.createElement(
					'div',
					{ className: 'table-hd' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'cell file-name js-cell-hd' },
							'文件名'
						),
						React.createElement(
							'div',
							{ className: 'cell file-size js-cell-hd' },
							'文件类型'
						),
						React.createElement(
							'div',
							{ className: 'cell file-modify-time js-cell-hd' },
							'修改时间'
						),
						React.createElement(
							'div',
							{ className: 'cell file-modifier js-cell-hd' },
							'最近修改人'
						),
						React.createElement(
							'div',
							{ className: 'cell file-size js-cell-hd' },
							'文件大小'
						)
					)
				),
				React.createElement(List, { contextMenuInit: this.contextMenuInit }),
				React.createElement(Operator, { menuRefData: this.state.menuRefData })
			);
		}

	});

	module.exports = Grid;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Item = __webpack_require__(113),
	    listActions = __webpack_require__(114),
	    listStore = __webpack_require__(115);

	var List = React.createClass({
		displayName: "List",

		mixins: [Reflux.connect(listStore.showStore, "list")],
		getInitialState: function getInitialState() {
			return {
				list: []
			};
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				listActions.showActions.getList({
					level: parseInt(hashObj.level) + 1,
					pid: hashObj.id
				});
			}, "gridWatcher", this);
		},
		componentWillUnmount: function componentWillUnmount() {
			router.unWatchHashChange("gridWatcher");
		},
		render: function render() {
			var list = this.state.list;
			var itemComps = list.map((function (item, index) {
				return React.createElement(Item, { key: item.id,
					itemInfo: item,
					contextMenuInit: this.props.contextMenuInit });
			}).bind(this));

			return React.createElement(
				"div",
				{ className: "table-bd" },
				itemComps
			);
		}
	});

	module.exports = List;

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";

	var Item = React.createClass({
		displayName: "Item",

		updateHash: function updateHash(e) {
			var dataset = $(e.target).parents(".row").get(0).dataset;

			router.replaceHash({
				level: dataset.fileLevel,
				type: dataset.fileType,
				handle: "show",
				id: dataset.fileId,
				src: dataset.fileSrc.substr(6)
			});
		},
		contextMenuInit: function contextMenuInit(e) {
			if (e.button == 2) {
				var dataset = $(e.target).parents(".row").get(0).dataset;
				this.props.contextMenuInit(dataset);
			}
		},
		render: function render() {
			var itemInfo = this.props.itemInfo,
			    showFile = { display: itemInfo.type == "word" ? "block" : "none" },
			    showFolder = { display: itemInfo.type == "folder" ? "block" : "none" },
			    showPdf = { display: itemInfo.type == "pdf" ? "block" : "none" },
			    showMarkdown = { display: itemInfo.type == "markdown" ? "block" : "none" },
			    showCode = { display: itemInfo.type == "code" ? "block" : "none" };

			var fileType = itemInfo.type == "folder" ? "文件夹" : itemInfo.type;

			return React.createElement(
				"div",
				{ className: "row", onMouseUp: this.contextMenuInit,
					"data-file-id": itemInfo.id,
					"data-file-name": itemInfo.name,
					"data-file-type": itemInfo.type,
					"data-file-src": itemInfo.type == "pdf" ? itemInfo.detail : "",
					"data-menu-target": "js-cell",
					"data-file-level": itemInfo.level },
				React.createElement(
					"div",
					{ className: "cell file-name js-cell", onClick: this.updateHash },
					React.createElement(
						"span",
						{ className: "icon-wrap" },
						React.createElement(
							"i",
							{ style: showFile, className: "iconfont icon-file" },
							""
						),
						React.createElement(
							"i",
							{ style: showFolder, className: "iconfont" },
							""
						),
						React.createElement(
							"i",
							{ style: showPdf, className: "iconfont icon-pdf" },
							""
						),
						React.createElement(
							"i",
							{ style: showCode, className: "iconfont icon-code" },
							""
						),
						React.createElement(
							"i",
							{ style: showMarkdown, className: "iconfont icon-markdown" },
							""
						)
					),
					React.createElement(
						"span",
						{ className: "name-text js-name-text" },
						itemInfo.name
					)
				),
				React.createElement(
					"div",
					{ className: "cell file-size js-cell" },
					fileType
				),
				React.createElement(
					"div",
					{ className: "cell file-modify-time js-cell" },
					itemInfo.modifyTime
				),
				React.createElement(
					"div",
					{ className: "cell file-modifier js-cell" },
					itemInfo.author
				),
				React.createElement(
					"div",
					{ className: "cell file-size js-cell" },
					itemInfo.fileSize
				)
			);
		}
	});

	module.exports = Item;

/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";

	var showActions = Reflux.createActions(["getList"]);
	//操作导航数据action
	var operateActions = Reflux.createActions(["addItem", "renameItem", "deleteItem"]);

	module.exports = {
			showActions: showActions,
			operateActions: operateActions
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    listActions = __webpack_require__(114);

	var URL = {
		LIST: "/render/fileList.json",
		ADD: "/api/addFile.json",
		UPDATE: "/api/updateFile.json",
		DELETE: "/api/deleteFile.json"
	};

	var showStore = Reflux.createStore({
		listenables: [listActions.showActions],
		onGetList: function onGetList(params) {
			var self = this;
			//请求导航列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	var operateStore = Reflux.createStore({
		listenables: [listActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;

			ajax({
				url: URL.ADD,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onRenameItem: function onRenameItem(params) {
			var self = this;

			ajax({
				url: URL.UPDATE,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onDeleteItem: function onDeleteItem(params) {
			var self = this;

			ajax({
				url: URL.DELETE,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, type: "delete", data: data });
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: "对不起，删除失败！"
				});
			});
		}
	});

	module.exports = {
		showStore: showStore,
		operateStore: operateStore
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    Alert = antd.Alert,
	    listActions = __webpack_require__(114),
	    listStore = __webpack_require__(115),
	    ContextMenu = __webpack_require__(103);

	var Operator = React.createClass({
		displayName: "Operator",

		mixins: [Reflux.listenTo(listStore.operateStore, "onOperateStatus")],
		getInitialState: function getInitialState() {
			return {
				errmsg: "",
				modalVisible: false,
				modalTitle: "",
				placeholder: "",
				InputVal: "",
				menuRefData: {}
			};
		},
		onOperateStatus: function onOperateStatus(res) {
			var hashObj = router.getHashObject();

			if (res.type && res.type == "delete") {
				return listActions.showActions.getList({
					level: parseInt(hashObj.level) + 1,
					pid: hashObj.id
				});
			}

			if (res && res.ret) {
				this.setState({
					errmsg: "",
					modalVisible: false
				});
				listActions.showActions.getList({
					level: parseInt(hashObj.level) + 1,
					pid: hashObj.id
				});
			} else {
				this.setState({
					errmsg: res.errmsg
				});
			}
		},
		addFolder: function addFolder() {
			this.setState({
				modalVisible: true,
				modalTitle: "新建文件夹",
				placeholder: "请输入文件夹名字！",
				InputVal: "",
				menuRefData: {}
			}, function () {
				this.refs.InputRef.getDOMNode().focus();
			});
		},
		//添加word文件的操作通过hash传递给word组件处理
		addWord: function addWord() {
			router.replaceHash({
				type: "word",
				handle: "add"
			}, this);
		},
		//上传的操作通过hash传递给pdf组件处理
		upload: function upload() {
			router.replaceHash({
				type: "pdf",
				handle: "upload"
			}, this);
		},
		//添加code文件的操作通过hash传递给code组件处理
		addCode: function addCode() {
			router.replaceHash({
				type: "code",
				handle: "add"
			}, this);
		},
		//添加markdown的操作通过hash传递给markdown组件处理
		addMarkdown: function addMarkdown() {
			router.replaceHash({
				type: "markdown",
				handle: "add"
			}, this);
		},
		rename: function rename() {
			this.setState({
				modalVisible: true,
				modalTitle: "重命名",
				placeholder: "请输入新的名字！",
				menuRefData: this.props.menuRefData,
				InputVal: this.props.menuRefData.fileName
			}, function () {
				this.refs.InputRef.getDOMNode().focus();
			});
		},
		deleteFile: function deleteFile() {
			var self = this;
			var menuRefData = this.props.menuRefData;

			antd.Modal.confirm({
				title: '您是否确认要删除这项内容！',
				onOk: function onOk() {
					listActions.operateActions.deleteItem({ id: menuRefData.fileId, type: menuRefData.fileType });
				},
				onCancel: function onCancel() {}
			});
		},
		submitData: function submitData() {
			var data = {},
			    menuRefData = this.state.menuRefData,
			    hashObj = router.getHashObject();

			//fileId存在则是重命名操作，否则则为添加
			if (menuRefData.fileId) {
				data = JSON.stringify({ id: menuRefData.fileId, type: menuRefData.fileType, name: this.state.InputVal });
				listActions.operateActions.renameItem(data);
			} else {
				data = JSON.stringify({
					pid: hashObj.id,
					type: "folder",
					level: parseInt(hashObj.level) + 1,
					name: this.state.InputVal
				});
				listActions.operateActions.addItem(data);
			}
		},
		validateData: function validateData() {
			var InputVal = this.state.InputVal;
			if (InputVal == "") {
				this.setState({
					errmsg: "新的名字不得为空！"
				});
				return false;
			} else {
				this.setState({
					errmsg: ""
				});
				return true;
			}
		},
		handleChange: function handleChange(e) {
			this.setState({
				InputVal: e.target.value.trim()
			});
		},
		handleOk: function handleOk() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			e.keyCode == 13 && this.validateData() ? this.submitData() : "";
		},
		handleCancel: function handleCancel() {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			ContextMenu.unMount(["createFile", "operateFile"]);
		},
		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					Modal,
					{ title: this.state.modalTitle,
						visible: this.state.modalVisible,
						onOk: this.handleOk,
						onCancel: this.handleCancel },
					React.createElement(
						"div",
						{ style: { display: this.state.errmsg ? "block" : "none" } },
						React.createElement(Alert, { message: this.state.errmsg, type: "error" })
					),
					React.createElement("input", { ref: "InputRef",
						type: "text",
						className: "dialog-text",
						value: this.state.InputVal,
						onKeyUp: this.handleEnter,
						onChange: this.handleChange,
						placeholder: this.state.placeholder })
				),
				React.createElement(ContextMenu, { target: "js-content-bd,path,js-cell-hd,layout-table",
					menuId: "createFile",
					showMenus: ["addFile", "addMarkdown", "addFolder", "upload", "addCode"],
					addFile: this.addWord,
					addCode: this.addCode,
					addMarkdown: this.addMarkdown,
					addFolder: this.addFolder,
					upload: this.upload }),
				React.createElement(ContextMenu, { target: "js-cell",
					menuId: "operateFile",
					showMenus: ["rename", "delete"],
					rename: this.rename,
					"delete": this.deleteFile })
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Menu = antd.Menu,
	    Modal = antd.Modal,
	    Alert = antd.Alert,
	    Dropdown = antd.Dropdown;

	var userActions = __webpack_require__(118),
	    userStore = __webpack_require__(119);

	var User = React.createClass({
		displayName: "User",

		mixins: [Reflux.listenTo(userStore.operateStore, "onOperateStatus")],
		getInitialState: function getInitialState() {
			return {
				errmsg: "",
				modalVisible: false
			};
		},
		onOperateStatus: function onOperateStatus(res) {
			if (res && res.ret) {
				this.setState({
					errmsg: "",
					modalVisible: false
				});
				this.refs.oldPassword.getDOMNode().value = '';
				this.refs.password.getDOMNode().value = '';
				this.refs.passwordAgain.getDOMNode().value = '';
			} else {
				this.setState({
					errmsg: res.errmsg
				});
			}
		},
		userManage: function userManage(e) {
			if (e.key == 0) {
				this.setState({
					modalVisible: true
				});
			} else if (e.key == 1) {
				location.href = '/logout';
			}
		},
		handleCancel: function handleCancel() {
			this.setState({
				errmsg: "",
				modalVisible: false
			});
		},
		handleSubmit: function handleSubmit() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			if (e.keyCode == 13) {
				this.handleSubmit();
			};
		},
		submitData: function submitData() {
			var data = JSON.stringify({
				oldPassword: this.refs.oldPassword.getDOMNode().value,
				password: this.refs.password.getDOMNode().value
			});

			userActions.operateActions.updateItem(data);
		},
		validateData: function validateData() {
			var oldPassword = this.refs.oldPassword.getDOMNode().value.trim(),
			    password = this.refs.password.getDOMNode().value.trim(),
			    passwordAgain = this.refs.passwordAgain.getDOMNode().value.trim();

			if (oldPassword == "") {
				this.setState({
					errmsg: "旧密码不得为空！"
				});
				return false;
			}
			if (!/\w/.test(oldPassword)) {
				this.setState({
					errmsg: "旧密码必须由数字、字母和下划线组成！"
				});
				return false;
			}
			if (password == "") {
				this.setState({
					errmsg: "新密码不得为空！"
				});
				return false;
			}
			if (!/\w/.test(password)) {
				this.setState({
					errmsg: "新密码必须由数字、字母和下划线组成！"
				});
				return false;
			}
			if (!/\w{6}/.test(password)) {
				this.setState({
					errmsg: "新密码不得低于6位！"
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
			return true;
		},
		render: function render() {
			var menu = React.createElement(
				Menu,
				{ onClick: this.userManage },
				React.createElement(
					Menu.Item,
					{ key: "0" },
					"修改密码"
				),
				React.createElement(
					Menu.Item,
					{ key: "1" },
					"退出"
				)
			);

			return React.createElement(
				"div",
				null,
				React.createElement(
					Dropdown,
					{ overlay: menu },
					React.createElement(
						"div",
						{ className: "ui-user-manage" },
						React.createElement("i", { className: "iconfont icon-user-manage" })
					)
				),
				React.createElement(
					Modal,
					{ title: "修改密码",
						visible: this.state.modalVisible,
						onOk: this.handleSubmit,
						onCancel: this.handleCancel },
					React.createElement(
						"div",
						{ className: "m-user" },
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
								React.createElement("i", { className: "iconfont icon-password" })
							),
							React.createElement("input", { className: "ui-input", onKeyUp: this.handleEnter, ref: "oldPassword", type: "password", placeholder: "请输入旧密码" })
						),
						React.createElement(
							"div",
							{ className: "ui-item" },
							React.createElement(
								"label",
								{ className: "ui-label" },
								React.createElement("i", { className: "iconfont icon-password" })
							),
							React.createElement("input", { className: "ui-input", onKeyUp: this.handleEnter, ref: "password", type: "password", placeholder: "请输入新密码" })
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
						)
					)
				)
			);
		}
	});

	module.exports = User;

/***/ },
/* 118 */
/***/ function(module, exports) {

	//操作导航数据action
	"use strict";

	var operateActions = Reflux.createActions(["updateItem"]);

	module.exports = {
		operateActions: operateActions
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var userActions = __webpack_require__(118);

	var URL = {
		UPDATEITEM: "/api/updateUser.json"
	};

	var operateStore = Reflux.createStore({
		listenables: [userActions.operateActions],
		onUpdateItem: function onUpdateItem(params) {
			var self = this;
			ajax({
				url: URL.UPDATEITEM,
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

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Detail = __webpack_require__(121),
	    Operator = __webpack_require__(124);
	//组件映射，将根据hash的值来决定渲染特定的组件
	var RouteHandleCompMap = {
		show: Detail,
		add: Operator,
		edit: Operator
	};
	var Word = React.createClass({
		displayName: 'Word',

		getInitialState: function getInitialState() {
			return {
				handle: router.getHashObject().handle
			};
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				this.setState({
					handle: hashObj.handle
				});
			}, "wordHanleWatcher", this);
		},
		componentWillUnmount: function componentWillUnmount() {
			router.unWatchHashChange("wordHanleWatcher");
		},
		render: function render() {
			var handle = this.state.handle,
			    RouteHandleComp = RouteHandleCompMap[handle];

			return React.createElement(RouteHandleComp, null);
		}

	});

	module.exports = Word;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var wordActions = __webpack_require__(122),
	    wordStore = __webpack_require__(123),
	    Path = __webpack_require__(107);

	var Detail = React.createClass({
		displayName: 'Detail',

		mixins: [Reflux.listenTo(wordStore.showStore, "onUpdateDetail")],
		getInitialState: function getInitialState() {
			return {
				detail: ""
			};
		},
		onUpdateDetail: function onUpdateDetail(data) {
			this.setState({
				detail: data.detail
			});
		},
		editArticle: function editArticle() {
			router.replaceHash({
				handle: "edit"
			});
		},
		componentDidMount: function componentDidMount() {
			wordActions.showActions.getWord({ id: router.getHashObject().id });
		},
		componentDidUpdate: function componentDidUpdate() {
			uParse(".js-detail");
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'show-path' },
						React.createElement(
							'div',
							{ className: 'path-wrapper' },
							React.createElement(Path, null)
						),
						React.createElement(
							'div',
							{ className: 'base-btn save-btn', onClick: this.editArticle },
							'编辑'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd' },
					React.createElement(
						'div',
						{ className: 'detail-wrapper' },
						React.createElement('div', { className: 'js-detail detail', dangerouslySetInnerHTML: { __html: this.state.detail } })
					)
				)
			);
		}
	});

	module.exports = Detail;

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";

	var showActions = Reflux.createActions(["getWord"]);
	var operateActions = Reflux.createActions(["addItem", "updateItem"]);

	module.exports = {
		showActions: showActions,
		operateActions: operateActions
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    wordActions = __webpack_require__(122);

	var URL = {
		LIST: "/render/getWord.json",
		ADD: "/api/addFile.json",
		UPDATE: "/api/updateFile.json"
	};

	var showStore = Reflux.createStore({
		listenables: [wordActions.showActions],
		onGetWord: function onGetWord(params) {
			var self = this;
			//请求path列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	var operateStore = Reflux.createStore({
		listenables: [wordActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;

			ajax({
				url: URL.ADD,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onUpdateItem: function onUpdateItem(params) {
			var self = this;

			ajax({
				url: URL.UPDATE,
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
		showStore: showStore,
		operateStore: operateStore
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Modal = antd.Modal,
	    wordActions = __webpack_require__(122),
	    wordStore = __webpack_require__(123);

	var Operator = React.createClass({
		displayName: 'Operator',

		mixins: [Reflux.listenTo(wordStore.operateStore, "onOperateStatus"), Reflux.listenTo(wordStore.showStore, "onSetInitialData")],
		getInitialState: function getInitialState() {
			return {
				containerWidth: document.body.clientWidth - 246 + "px",
				containerHeight: document.body.clientHeight - 124 + "px",
				name: "",
				detail: ""
			};
		},
		//用于处理新增或新建的后续操作
		onOperateStatus: function onOperateStatus(res) {
			var hashObj = router.getHashObject();
			if (res && res.ret) {
				router.replaceHash({
					level: hashObj.handle == "edit" ? hashObj.level : parseInt(hashObj.level) + 1,
					type: "word",
					handle: "show",
					id: hashObj.handle == "edit" ? hashObj.id : res.data.id
				});
			} else {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			}
		},
		//修改时为字段赋初值
		onSetInitialData: function onSetInitialData(data) {
			this.setState({
				name: data.name,
				detail: data.detail
			});
		},
		handleChange: function handleChange(e) {
			this.setState({
				name: e.target.value
			});
		},
		dropAndBack: function dropAndBack() {
			var hashObj = router.getHashObject();
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			router.replaceHash({
				level: hashObj.level,
				type: hashObj.handle == "edit" ? "word" : "folder",
				handle: "show",
				id: hashObj.id
			});
		},
		saveArticle: function saveArticle() {
			this.validateData() ? this.submitData() : "";
		},
		submitData: function submitData() {
			var data = {},
			    hashObj = router.getHashObject(),
			    detail = UE.getEditor('article').getContent();

			//hashObj.handle == edit 则是编辑操作，否则则为添加
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			if (hashObj.handle == "edit") {
				data = JSON.stringify({
					id: hashObj.id,
					name: this.state.name,
					detail: detail
				});
				wordActions.operateActions.updateItem(data);
			} else {
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
		validateData: function validateData() {
			if (this.state.name.trim() == "") {
				Modal.error({
					title: '错误提示： ',
					content: "标题不得空！"
				});
				return;
			}
			return true;
		},
		componentDidMount: function componentDidMount() {
			var hashObj = router.getHashObject();

			UE.getEditor('article');
			if (hashObj.handle == "edit") {
				wordActions.showActions.getWord({ id: hashObj.id });
			}
		},
		componentDidUpdate: function componentDidUpdate() {
			var hashObj = router.getHashObject();

			if (hashObj.handle == "edit") {
				UE.getEditor('article').setContent(this.state.detail);
			}
		},
		componentWillUnmount: function componentWillUnmount() {
			UE.delEditor("article");
			$("#edui_fixedlayer").remove();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'm-code' },
						React.createElement('input', { value: this.state.name, onChange: this.handleChange, type: 'text', className: 'title', placeholder: '请输入文章标题！' }),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.saveArticle },
							'保存'
						),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.dropAndBack },
							'返回'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd' },
					React.createElement(
						'div',
						{ className: 'edit-detail' },
						React.createElement('div', { id: 'article', type: 'text/plain', style: { width: this.state.containerWidth, height: this.state.containerHeight } })
					)
				)
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Detail = __webpack_require__(126),
	    Operator = __webpack_require__(129);
	//组件映射，将根据hash的值来决定渲染特定的组件
	var RouteHandleCompMap = {
		show: Detail,
		add: Operator,
		edit: Operator
	};
	var Code = React.createClass({
		displayName: 'Code',

		getInitialState: function getInitialState() {
			var hashObj = router.getHashObject();

			return {
				handle: hashObj.handle
			};
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				this.setState({
					handle: hashObj.handle
				});
			}, "markdownHanleWatcher", this);
		},
		componentWillUnmount: function componentWillUnmount() {
			router.unWatchHashChange("markdownHanleWatcher");
		},
		render: function render() {
			var handle = this.state.handle,
			    RouteHandleComp = RouteHandleCompMap[handle];

			return React.createElement(RouteHandleComp, null);
		}
	});

	module.exports = Code;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var markdownActions = __webpack_require__(127),
	    markdownStore = __webpack_require__(128),
	    Path = __webpack_require__(107);

	var Detail = React.createClass({
		displayName: 'Detail',

		mixins: [Reflux.listenTo(markdownStore.showStore, "setInitalMarkdown")],
		getInitialState: function getInitialState() {
			return {
				detail: ""
			};
		},
		setInitalMarkdown: function setInitalMarkdown(data) {
			editormd.markdownToHTML("js-editormd-preview", {
				markdown: data.detail, //+ "\r\n" + $("#append-test").text(),
				htmlDecode: "style,script,iframe",
				flowChart: true, // 默认不解析
				sequenceDiagram: true });
		},
		// 默认不解析
		editMarkdown: function editMarkdown() {
			router.replaceHash({
				handle: "edit"
			});
		},
		componentDidMount: function componentDidMount() {
			markdownActions.showActions.getMarkdown({ id: router.getHashObject().id });
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content m-markdown m-show-markdown' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'show-path' },
						React.createElement(
							'div',
							{ className: 'path-wrapper' },
							React.createElement(Path, null)
						),
						React.createElement(
							'div',
							{ className: 'base-btn save-btn', onClick: this.editMarkdown },
							'编辑'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd editormd-preview' },
					React.createElement(
						'div',
						{ id: 'js-editormd-preview' },
						React.createElement('textarea', { style: { display: "none" } })
					)
				)
			);
		}
	});

	module.exports = Detail;

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";

	var showActions = Reflux.createActions(["getMarkdown"]);
	var operateActions = Reflux.createActions(["addItem", "updateItem"]);

	module.exports = {
		showActions: showActions,
		operateActions: operateActions
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    markdownActions = __webpack_require__(127);

	var URL = {
		LIST: "/render/getWord.json",
		ADD: "/api/addFile.json",
		UPDATE: "/api/updateFile.json"
	};

	var showStore = Reflux.createStore({
		listenables: [markdownActions.showActions],
		onGetMarkdown: function onGetMarkdown(params) {
			var self = this;
			//请求path列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	var operateStore = Reflux.createStore({
		listenables: [markdownActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;

			ajax({
				url: URL.ADD,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onUpdateItem: function onUpdateItem(params) {
			var self = this;

			ajax({
				url: URL.UPDATE,
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
		showStore: showStore,
		operateStore: operateStore
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Modal = antd.Modal,
	    markdownActions = __webpack_require__(127),
	    markdownStore = __webpack_require__(128);

	var Operator = React.createClass({
		displayName: 'Operator',

		mixins: [Reflux.listenTo(markdownStore.operateStore, "onOperateStatus"), Reflux.listenTo(markdownStore.showStore, "onSetInitialData")],
		getInitialState: function getInitialState() {
			return {
				name: "",
				markdownEditor: null
			};
		},
		//用于处理新增或新建的后续操作
		onOperateStatus: function onOperateStatus(res) {
			var hashObj = router.getHashObject();

			if (res && res.ret) {
				this.setState({
					markdownEditor: null
				});
				router.replaceHash({
					level: hashObj.handle == "edit" ? hashObj.level : parseInt(hashObj.level) + 1,
					type: "markdown",
					handle: "show",
					id: hashObj.handle == "edit" ? hashObj.id : res.data.id
				});
			} else {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			}
		},
		//修改时为字段赋初值
		onSetInitialData: function onSetInitialData(data) {
			var markdownEditor = editormd("editormd", {
				path: "./editormd/lib/",
				height: "auto",
				markdown: data.detail,
				flowChart: true, // 开启流程图支持，默认关闭
				sequenceDiagram: true // 开启时序/序列图支持，默认关闭,
			});
			this.setState({
				name: data.name,
				markdownEditor: markdownEditor
			});
		},
		handleChange: function handleChange(e) {
			this.setState({
				name: e.target.value
			});
		},
		dropAndBack: function dropAndBack() {
			var hashObj = router.getHashObject();
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			router.replaceHash({
				level: hashObj.level,
				type: hashObj.handle == "edit" ? "markdown" : "folder",
				handle: "show",
				id: hashObj.id,
				markdownEditor: null
			});
		},
		saveMarkdown: function saveMarkdown() {
			this.validateData() ? this.submitData() : "";
		},
		submitData: function submitData() {
			var data = {},
			    hashObj = router.getHashObject(),
			    originMD = this.state.markdownEditor.getMarkdown();

			//hashObj.handle == edit 则是编辑操作，否则则为添加
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			if (hashObj.handle == "edit") {
				data = JSON.stringify({
					id: hashObj.id,
					name: this.state.name,
					detail: originMD
				});
				markdownActions.operateActions.updateItem(data);
			} else {
				data = JSON.stringify({
					pid: hashObj.id,
					type: "markdown",
					level: parseInt(hashObj.level) + 1,
					name: this.state.name,
					detail: originMD
				});
				markdownActions.operateActions.addItem(data);
			}
		},
		validateData: function validateData() {
			if (this.state.name.trim() == "") {
				Modal.error({
					title: '错误提示： ',
					content: "标题不得空！"
				});
				return;
			}
			return true;
		},
		componentDidMount: function componentDidMount() {
			var self = this,
			    hashObj = router.getHashObject();
			if (hashObj.handle == "add") {
				$.get('/editormd/default.md', function (md) {
					var markdownEditor = editormd("editormd", {
						path: "./editormd/lib/",
						height: "auto",
						markdown: md,
						flowChart: true, // 开启流程图支持，默认关闭
						sequenceDiagram: true // 开启时序/序列图支持，默认关闭,
					});
					self.setState({
						markdownEditor: markdownEditor
					});
				});
			} else {
				markdownActions.showActions.getMarkdown({ id: router.getHashObject().id });
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content m-markdown' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'm-code' },
						React.createElement('input', { value: this.state.name,
							type: 'text',
							className: 'title',
							onChange: this.handleChange,
							placeholder: '请输入文章标题！' }),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.saveMarkdown },
							'保存'
						),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.dropAndBack },
							'返回'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd' },
					React.createElement(
						'div',
						{ id: 'editormd' },
						React.createElement('textarea', { style: { display: 'none' } })
					)
				),
				React.createElement('div', { className: 'content-ft' })
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Detail = __webpack_require__(131),
	    Operator = __webpack_require__(132),
	    Path = __webpack_require__(107);
	//组件映射，将根据hash的值来决定渲染特定的组件
	var RouteHandleCompMap = {
		show: Detail,
		upload: Operator
	};
	var Pdf = React.createClass({
		displayName: 'Pdf',

		getInitialState: function getInitialState() {
			return {
				handle: router.getHashObject().handle,
				pdfSrc: ""
			};
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				this.setState({
					handle: hashObj.handle,
					pdfSrc: hashObj.src
				});
			}, "pdfHanleWatcher", this);
			var hashObj = router.getHashObject();
			this.setState({
				handle: hashObj.handle,
				pdfSrc: hashObj.src
			});
		},
		componentWillUnmount: function componentWillUnmount() {
			router.unWatchHashChange("pdfHanleWatcher");
		},
		render: function render() {
			var handle = this.state.handle,
			    RouteHandleComp = RouteHandleCompMap[handle];

			return React.createElement(
				'div',
				{ className: 'content pdf-content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(Path, null)
				),
				React.createElement(
					'div',
					{ className: 'content-bd js-content-bd' },
					React.createElement(RouteHandleComp, { pdfSrc: this.state.pdfSrc })
				)
			);
		}
	});

	module.exports = Pdf;

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";

	var Detail = React.createClass({
		displayName: "Detail",

		render: function render() {
			var pdfSrc = "/pdfweb/web/viewer.html?file=" + this.props.pdfSrc;

			return React.createElement("iframe", { className: "pdf-wrapper", src: pdfSrc });
		}
	});

	module.exports = Detail;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    pdfActions = __webpack_require__(133),
	    pdfStore = __webpack_require__(134);

	var Operator = React.createClass({
		displayName: "Operator",

		mixins: [Reflux.listenTo(pdfStore, "onOperateStatus")],
		getInitialState: function getInitialState() {
			return {
				name: "",
				file: null
			};
		},
		//用于处理新增的后续操作
		onOperateStatus: function onOperateStatus(res) {
			var hashObj = router.getHashObject();
			if (res && res.ret) {
				router.replaceHash({
					type: "folder",
					handle: "show"
				});
			} else {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			}
		},
		fileChange: function fileChange(e) {
			var file = e.target.files[0];

			if (file && file.type != "application/pdf") {
				Modal.error({
					title: '错误提示： ',
					content: "仅支持pdf文件！"
				});
				this.setState({
					name: "",
					file: null
				});
				return;
			}
			if (file && file.size >= 2097152 * 5) {
				Modal.error({
					title: '错误提示： ',
					content: "请上传小于2M的pdf文件！"
				});
				this.setState({
					name: "",
					file: null
				});
				return;
			}
			this.setState({
				name: file.name,
				file: file
			});
		},
		handleChange: function handleChange(e) {
			this.setState({
				name: e.target.value
			});
		},
		handleSave: function handleSave() {
			this.validateData() ? this.submitData() : "";
		},
		handleEnter: function handleEnter(e) {
			e.keyCode == 13 && this.validateData() ? this.submitData() : "";
		},
		handleCancel: function handleCancel() {
			router.replaceHash({
				type: "folder",
				handle: "show"
			});
		},
		validateData: function validateData() {
			if (this.state.name.trim() == "" || !this.state.file) {
				Modal.error({
					title: '错误提示： ',
					content: "pdf文件不得空！"
				});
				return;
			}
			return true;
		},
		submitData: function submitData() {
			var hashObj = router.getHashObject(),
			    formData = new FormData();

			formData.append("name", this.state.name);
			formData.append("pdfFile", this.state.file);
			formData.append("pid", hashObj.id);
			formData.append("type", "pdf");
			formData.append("level", parseInt(hashObj.level) + 1);

			pdfActions.upload(formData);
		},
		render: function render() {
			return React.createElement(
				"div",
				{ className: "m-upload" },
				React.createElement("input", { ref: "uploadInput", type: "text",
					onChange: this.handleChange,
					className: "upload-text",
					value: this.state.name,
					onKeyUp: this.handleEnter,
					placeholder: "上传文档后可以在此更改文档名！" }),
				React.createElement(
					"span",
					{ className: "upload-btn" },
					React.createElement("input", { type: "file", onChange: this.fileChange, name: "pdfFile" }),
					React.createElement(
						"button",
						{ className: "btn-mask" },
						React.createElement(
							"span",
							{ className: "icon-wrap" },
							React.createElement(
								"i",
								{ className: "iconfont icon-upload" },
								""
							)
						),
						React.createElement(
							"span",
							null,
							"点击上传"
						)
					)
				),
				React.createElement(
					"span",
					{ className: "base-btn save-btn", onClick: this.handleSave },
					"保存"
				),
				React.createElement(
					"span",
					{ className: "base-btn save-btn", onClick: this.handleCancel },
					"返回"
				)
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";

	var pdfActions = Reflux.createActions(["upload"]);

	module.exports = pdfActions;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var pdfActions = __webpack_require__(133);

	var URL = {
		UPLOAD: "/api/addFile.json"
	};

	var pdfStore = Reflux.createStore({
		listenables: [pdfActions],
		onUpload: function onUpload(params) {
			var self = this;

			ajax({
				url: URL.UPLOAD,
				type: "post",
				contentType: false,
				processData: false,
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		}
	});

	module.exports = pdfStore;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Detail = __webpack_require__(136),
	    Operator = __webpack_require__(139);
	//组件映射，将根据hash的值来决定渲染特定的组件
	var RouteHandleCompMap = {
		show: Detail,
		add: Operator,
		edit: Operator
	};
	var Code = React.createClass({
		displayName: 'Code',

		getInitialState: function getInitialState() {
			var hashObj = router.getHashObject();

			return {
				handle: hashObj.handle
			};
		},
		componentDidMount: function componentDidMount() {
			router.watchHashChange(function (hashObj, hashStr) {
				this.setState({
					handle: hashObj.handle
				});
			}, "codeHanleWatcher", this);
		},
		componentWillUnmount: function componentWillUnmount() {
			router.unWatchHashChange("codeHanleWatcher");
		},
		render: function render() {
			var handle = this.state.handle,
			    RouteHandleComp = RouteHandleCompMap[handle];

			return React.createElement(RouteHandleComp, null);
		}
	});

	module.exports = Code;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Modal = antd.Modal,
	    Path = __webpack_require__(107),
	    codeActions = __webpack_require__(137),
	    codeStore = __webpack_require__(138);

	var EDITOR = {
		editorHtml: null,
		editorCss: null
	};
	var Operator = React.createClass({
		displayName: 'Operator',

		mixins: [Reflux.listenTo(codeStore.showStore, "setInitalCode")],
		getInitialState: function getInitialState() {
			return {
				codeHtml: "",
				codeCss: ""
			};
		},
		setInitalCode: function setInitalCode(data) {
			var self = this;

			EDITOR.editorHtml.setValue(data.codeHtml);
			EDITOR.editorCss.setValue(data.codeCss);
			setTimeout(function () {
				self.updateHtml(EDITOR.editorHtml);
				self.updateStyle(EDITOR.editorCss);
			}, 300);
		},
		editCode: function editCode() {
			router.replaceHash({
				handle: "edit"
			});
		},
		componentDidMount: function componentDidMount() {
			var self = this,
			    focusItem = '';

			var editorHtml = CodeMirror.fromTextArea(document.getElementById("js-code-html"), {
				mode: "htmlmixed",
				theme: "3024-night",
				tabSize: 2,
				readOnly: true,
				indentWithTabs: true,
				lineNumbers: true,
				lineWrapping: true,
				matchBrackets: true
			});
			var editorCss = CodeMirror.fromTextArea(document.getElementById("js-code-css"), {
				mode: "css",
				theme: "3024-night",
				tabSize: 2,
				readOnly: true,
				indentWithTabs: true,
				lineNumbers: true,
				lineWrapping: true,
				matchBrackets: true
			});
			EDITOR = {
				editorHtml: editorHtml,
				editorCss: editorCss
			};
			self.setInitialStyle();
			codeActions.showActions.getCode({ id: router.getHashObject().id });
		},
		setInitialStyle: function setInitialStyle() {
			var $codeHtmlWrapper = $("#js-code-html-wrapper"),
			    $codeCssWrapper = $("#js-code-css-wrapper");

			$codeHtmlWrapper.find(".CodeMirror").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror").css({ height: $codeCssWrapper.height() });
			$codeHtmlWrapper.find(".CodeMirror-gutters").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror-gutters").css({ height: $codeCssWrapper.height() });

			$codeHtmlWrapper.find(".CodeMirror-vscrollbar").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror-vscrollbar").css({ height: $codeCssWrapper.height() });

			window.onresize = function () {
				setTimeout(function () {
					$codeHtmlWrapper.find(".CodeMirror").css({ height: $codeHtmlWrapper.height() });
					$codeCssWrapper.find(".CodeMirror").css({ height: $codeCssWrapper.height() });
				}, 300);
			};
		},
		updateStyle: function updateStyle(editorCss) {
			var head = window.frames["preview"].document.head,
			    codeStyle = null,
			    codeStyles = head.getElementsByClassName("js-preview-style");

			if (codeStyles.length) {
				codeStyle = codeStyles[0];
			} else {
				codeStyle = document.createElement("style");
				codeStyle.type = 'text/css';
				codeStyle.className = "js-preview-style";
			}
			codeStyle.innerHTML = editorCss.getValue();
			head.appendChild(codeStyle);
		},
		updateHtml: function updateHtml(editorHtml) {
			var previewDocumemt = window.frames["preview"].document;
			previewDocumemt.write(editorHtml.getValue());
			previewDocumemt.close();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'show-path' },
						React.createElement(
							'div',
							{ className: 'path-wrapper' },
							React.createElement(Path, null)
						),
						React.createElement(
							'div',
							{ className: 'base-btn save-btn', onClick: this.editCode },
							'编辑'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd m-code' },
					React.createElement(
						'div',
						{ className: 'col1', id: 'js-code-html-wrapper' },
						React.createElement('textarea', { id: 'js-code-html' })
					),
					React.createElement(
						'div',
						{ className: 'col2', id: 'js-code-css-wrapper' },
						React.createElement('textarea', { id: 'js-code-css' })
					),
					React.createElement(
						'div',
						{ className: 'col3' },
						React.createElement('iframe', { className: 'preview', name: 'preview' })
					)
				),
				React.createElement('div', { className: 'm-code-ft' })
			);
		}
	});

	module.exports = Operator;

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	var showActions = Reflux.createActions(["getCode"]);
	var operateActions = Reflux.createActions(["addItem", "updateItem"]);

	module.exports = {
		showActions: showActions,
		operateActions: operateActions
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Modal = antd.Modal,
	    CodeActions = __webpack_require__(137);

	var URL = {
		LIST: "/render/getCode.json",
		ADD: "/api/addFile.json",
		UPDATE: "/api/updateFile.json"
	};

	var showStore = Reflux.createStore({
		listenables: [CodeActions.showActions],
		onGetCode: function onGetCode(params) {
			var self = this;
			//请求path列表数据
			ajax({
				url: URL.LIST,
				type: "get",
				data: params
			}).done(function (data) {
				self.trigger(data);
			}).fail(function (res) {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			});
		}
	});

	var operateStore = Reflux.createStore({
		listenables: [CodeActions.operateActions],
		onAddItem: function onAddItem(params) {
			var self = this;

			ajax({
				url: URL.ADD,
				type: "post",
				data: params
			}).done(function (data) {
				self.trigger({ ret: true, data: data });
			}).fail(function (res) {
				self.trigger(res);
			});
		},
		onUpdateItem: function onUpdateItem(params) {
			var self = this;

			ajax({
				url: URL.UPDATE,
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
		showStore: showStore,
		operateStore: operateStore
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Modal = antd.Modal,
	    codeActions = __webpack_require__(137),
	    codeStore = __webpack_require__(138);
	var EDITOR = {
		editorHtml: null,
		editorCss: null
	};
	var Operator = React.createClass({
		displayName: 'Operator',

		mixins: [Reflux.listenTo(codeStore.operateStore, "onOperateStatus"), Reflux.listenTo(codeStore.showStore, "onSetInitialData")],
		getInitialState: function getInitialState() {
			return {
				name: ""
			};
		},
		//用于处理新增或新建的后续操作
		onOperateStatus: function onOperateStatus(res) {
			var hashObj = router.getHashObject();
			if (res && res.ret) {
				router.replaceHash({
					level: hashObj.handle == "edit" ? hashObj.level : parseInt(hashObj.level) + 1,
					type: "code",
					handle: "show",
					id: hashObj.handle == "edit" ? hashObj.id : res.data.id
				});
			} else {
				Modal.error({
					title: '错误提示： ',
					content: res.errmsg
				});
			}
		},
		//修改时为字段赋初值
		onSetInitialData: function onSetInitialData(data) {
			this.setCode(data);
			this.setState({
				name: data.name
			});
		},
		setCode: function setCode(data) {
			var self = this;

			EDITOR.editorHtml.setValue(data.codeHtml);
			EDITOR.editorCss.setValue(data.codeCss);
			setTimeout(function () {
				self.updateHtml(EDITOR.editorHtml);
				self.updateStyle(EDITOR.editorCss);
			}, 300);
		},
		handleChange: function handleChange(e) {
			this.setState({
				name: e.target.value
			});
		},
		dropAndBack: function dropAndBack() {
			var hashObj = router.getHashObject();
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			router.replaceHash({
				level: hashObj.level,
				type: hashObj.handle == "edit" ? "code" : "folder",
				handle: "show",
				id: hashObj.id
			});
		},
		saveCode: function saveCode() {
			this.validateData() ? this.submitData() : "";
		},
		submitData: function submitData() {
			var data = {},
			    hashObj = router.getHashObject();

			//hashObj.handle == edit 则是编辑操作，否则则为添加
			//如果为新增，则hash为父folder的hash，如果为修改则是当前文档的hash
			if (hashObj.handle == "edit") {
				data = JSON.stringify({
					id: hashObj.id,
					name: this.state.name,
					codeHtml: EDITOR.editorHtml.getValue(),
					codeCss: EDITOR.editorCss.getValue()
				});
				codeActions.operateActions.updateItem(data);
			} else {
				data = JSON.stringify({
					pid: hashObj.id,
					type: "code",
					level: parseInt(hashObj.level) + 1,
					name: this.state.name,
					codeHtml: EDITOR.editorHtml.getValue(),
					codeCss: EDITOR.editorCss.getValue()
				});
				codeActions.operateActions.addItem(data);
			}
		},
		validateData: function validateData() {
			if (this.state.name.trim() == "") {
				Modal.error({
					title: '错误提示： ',
					content: "标题不得空！"
				});
				return;
			}
			return true;
		},
		componentDidMount: function componentDidMount() {
			var self = this,
			    focusItem = '',
			    hashObj = router.getHashObject();

			var editorHtml = CodeMirror.fromTextArea(document.getElementById("js-code-html"), {
				mode: "htmlmixed",
				theme: "3024-night",
				tabSize: 2,
				extraKeys: { "Ctrl-Space": "autocomplete" },
				indentWithTabs: true,
				lineNumbers: true,
				lineWrapping: true,
				matchBrackets: true
			});
			var editorCss = CodeMirror.fromTextArea(document.getElementById("js-code-css"), {
				mode: "css",
				theme: "3024-night",
				tabSize: 2,
				extraKeys: { "Ctrl-Space": "autocomplete" },
				indentWithTabs: true,
				lineNumbers: true,
				lineWrapping: true,
				matchBrackets: true
			});
			editorHtml.on("focus", function (editor, e) {
				focusItem = 'html';
			});
			editorCss.on("focus", function (editor, e) {
				focusItem = 'css';
			});
			editorCss.on("keyup", function (editor, e) {
				self.updateStyle(editorCss);
			});
			document.addEventListener('keydown', function (e) {
				if (e.keyCode == 83 && e.ctrlKey) {
					e.preventDefault();
					if (focusItem == 'html') {
						self.updateHtml(editorHtml);
						self.updateStyle(editorCss);
					}
				}
			}, true);
			self.setInitialStyle();
			EDITOR = {
				editorHtml: editorHtml,
				editorCss: editorCss
			};
			if (hashObj.handle == "add") {
				self.setInitalCode(editorHtml, editorCss);
			} else {
				codeActions.showActions.getCode({ id: router.getHashObject().id });
			}
		},
		setInitalCode: function setInitalCode(editorHtml, editorCss) {
			var self = this;

			editorHtml.setValue(['<!DOCTYPE html>', '<html>', '<head>', '  <meta charset="utf-8">', '  <title>足迹屋</title>', '</head>', '<body>', '  <div class="test"></div>', '  <script type="text/javascript" src="/scripts/jquery.js"></script>', '  <script type="text/javascript">console.log($)</script>', '</body>', '</html>'].join("\r\n"));
			editorCss.setValue(['.test {', '  width: 100px;', '  height: 100px;', '  background: green;', '}'].join("\r\n"));
			setTimeout(function () {
				self.updateHtml(editorHtml);
				self.updateStyle(editorCss);
			}, 300);
		},
		setInitialStyle: function setInitialStyle() {
			var $codeHtmlWrapper = $("#js-code-html-wrapper"),
			    $codeCssWrapper = $("#js-code-css-wrapper");

			$codeHtmlWrapper.find(".CodeMirror").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror").css({ height: $codeCssWrapper.height() });
			$codeHtmlWrapper.find(".CodeMirror-gutters").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror-gutters").css({ height: $codeCssWrapper.height() });

			$codeHtmlWrapper.find(".CodeMirror-vscrollbar").css({ height: $codeHtmlWrapper.height() });
			$codeCssWrapper.find(".CodeMirror-vscrollbar").css({ height: $codeCssWrapper.height() });

			window.onresize = function () {
				setTimeout(function () {
					$codeHtmlWrapper.find(".CodeMirror").css({ height: $codeHtmlWrapper.height() });
					$codeCssWrapper.find(".CodeMirror").css({ height: $codeCssWrapper.height() });
				}, 300);
			};
		},
		updateStyle: function updateStyle(editorCss) {
			var head = window.frames["preview"].document.head,
			    codeStyle = null,
			    codeStyles = head.getElementsByClassName("js-preview-style");

			if (codeStyles.length) {
				codeStyle = codeStyles[0];
			} else {
				codeStyle = document.createElement("style");
				codeStyle.type = 'text/css';
				codeStyle.className = "js-preview-style";
			}
			codeStyle.innerHTML = editorCss.getValue();
			head.appendChild(codeStyle);
		},
		updateHtml: function updateHtml(editorHtml) {
			var previewDocumemt = window.frames["preview"].document;
			previewDocumemt.write(editorHtml.getValue());
			previewDocumemt.close();
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'div',
					{ className: 'content-hd' },
					React.createElement(
						'div',
						{ className: 'm-code' },
						React.createElement('input', { value: this.state.name,
							type: 'text',
							className: 'title',
							onChange: this.handleChange,
							placeholder: '请输入文章标题！' }),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.saveCode },
							'保存'
						),
						React.createElement(
							'span',
							{ className: 'base-btn save-btn', onClick: this.dropAndBack },
							'返回'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'content-bd m-code' },
					React.createElement(
						'div',
						{ className: 'col1', id: 'js-code-html-wrapper' },
						React.createElement('textarea', { id: 'js-code-html' })
					),
					React.createElement(
						'div',
						{ className: 'col2', id: 'js-code-css-wrapper' },
						React.createElement('textarea', { id: 'js-code-css' })
					),
					React.createElement(
						'div',
						{ className: 'col3' },
						React.createElement('iframe', { className: 'preview', name: 'preview' })
					)
				),
				React.createElement('div', { className: 'm-code-ft' })
			);
		}
	});

	module.exports = Operator;

/***/ }
/******/ ]);