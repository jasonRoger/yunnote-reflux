/**
* 该路由用于监控hash的变换并执行相应的注册回调函数
* watchHashChange: 注册回调，当hashchange时触发，注册时应传递两个参数：回调和回调的执行上下文
* getHashString： 获取hash字符串
* getHashObject: 获取对象格式的hash
* setHash: 设置hash值，可用于初始复制和reset，参数格式为对象，键位hash名，值为hash值
* pushHash: 追加一个hash，参数格式为对象，键位hash名，值为hash值
* replaceHash: 替换一个或多个hash，参数格式为对象，键位hash名，值为hash值
*/
var router = (function() {
	var _callbacks = [],
		_contexts = [],
		_watchers = [];

	window.onhashchange = function() {
		var hashObject = router.getHashObject(),
			hashString = router.getHashString();
		for(var i = 0; i < _callbacks.length; i ++) {
			_callbacks[i].call(_contexts[i], hashObject, hashString);
		}
	}

	return {
		watchHashChange: function(fn, wather, context) {
			if(_watchers.indexOf(wather) !== -1) return ;
			_callbacks.push(fn);
			_contexts.push(context || window);
			_watchers.push(wather);
		},
		unWatchHashChange: function(wather) {
			var index = _watchers.indexOf(wather);
			if(index == -1) return;
			_callbacks.splice(index, 1);
			_contexts.splice(index, 1);
			_watchers.splice(index, 1);
		},
		getHashString: function() {
			return location.hash;
		},
		getHashObject: function() {
			var hashString = location.hash.substring(2),
				hashArray = hashString.split("&"),
				hashObject = {},
				tempHashVal = [];

			if(!hashString) return {};
			for(var i = 0, length = hashArray.length; i < length; i++) {
				tempHashVal = hashArray[i].split("=");
				hashObject[tempHashVal[0]] = tempHashVal[1];
			}
			return hashObject;
		},
		setHash: function(hashObject) {
			var hashString = "#!";

			for(var o in hashObject) {
				hashString += o + "=" + hashObject[o] + "&";
			}
			location.hash = hashString.slice(0, -1);
		},
		pushHash: function(hashObject) {
			var hashString = location.hash ? location.hash + "&" : "#!";

			for(var o in hashObject) {
				hashString += o + "=" + hashObject[o] + "&";
			}
			location.hash = hashString.slice(0, -1);
		},
		replaceHash: function(hashObject) {
			var hashString = location.hash,
				pattern = "",
				matchs = [];

			for(var o in hashObject) {
				pattern = new RegExp("(!|&)" + o + "=[^&]*(&|$)");
				matchs = pattern.exec(hashString);

				if(matchs) {
					var replaceStr = matchs[0].replace(/=[^&]*/, "=" + hashObject[o]);
					hashString = hashString.replace(pattern, replaceStr);
				}
			}
			location.hash = hashString;
		}
	}
})();

module.exports = router;