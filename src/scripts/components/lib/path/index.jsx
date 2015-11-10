var Item = require("./Item.jsx"),
	pathActions = require("./action.es6"),
	pathStore = require("./store.es6");

var Path = React.createClass({
	mixins: [Reflux.connect(pathStore, "list")],
	getInitialState: function() {
		return {
			list: []
		};
	},
	backList: function() {
		var pathList = this.state.list,
			length = pathList.length,
			prevPath = {};

		if(length < 2) return ;
		prevPath = pathList[pathList.length - 2];
		router.replaceHash({
			level: prevPath.level,
			type: prevPath.type,
			handle: "show",
			id: prevPath.id
		});
	},
	componentDidMount: function() {
		router.watchHashChange(function(hashObj, hashStr) {
			pathActions.getPath(hashObj);
		}, "pathWatcher", this);
	},
	render: function() {
		var pathList = this.state.list;

		var pathComps = pathList.map(function(item, index){
			return <Item key = {item.id} itemInfo = {item} />
		});

		return (
			<span className = "path">
				<span className = "back-btn" onClick = {this.backList}><cite>返回上一级</cite></span>
				<ul className = "path-list">
					{pathComps}
				</ul>
			</span>
		);
	}

});

module.exports = Path;