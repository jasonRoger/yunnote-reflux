var React = require('react');
var MenuList = require("./MenuList.jsx");
window.targetSelector = window.targetSelector ? window.targetSelector : [];
window.menuIds = window.menuIds ? window.menuIds : [];

var ContextMenu = React.createClass({
	statics: {
		unMount: function(unMountTargets) {
			var index = -1,
				menusDom = document.getElementsByClassName("widget-menu-wrapper");
			for (var i = 0; i < unMountTargets.length; i++) {
				index = menuIds.indexOf(unMountTargets[i]);
				if(index !== -1) {
					menuIds.splice(index, 1);
					targetSelector.splice(index, 1);
					document.body.removeChild(menusDom[index]);
				}
			}
		}
	},
	componentDidMount: function() {
		var target = this.props.target;

		if(!target || (target && targetSelector.indexOf(target) != -1)) return ;
		var div = document.createElement("div");
		targetSelector.push(target);
		menuIds.push(this.props.menuId ? this.props.menuId : "normal" + Math.random())
		div.className = "widget-menu-wrapper";
		document.body.appendChild(div);
		React.render(<MenuList {...this.props} />, div);
	},
	render: function() {
		return <noscript></noscript>
	}
});

module.exports = ContextMenu;