var Item = require('./Item.jsx'),
	listActions = require("./action.es6"),
	listStore = require("./store.es6");

var List = React.createClass({
	mixins: [Reflux.connect(listStore.showStore, "list")],
	getInitialState: function() {
		return {
			list: []
		};
	},
	componentDidMount: function() {
		router.watchHashChange(function(hashObj, hashStr) {
			listActions.showActions.getList({
				level: parseInt(hashObj.level) + 1,
				pid: hashObj.id
			});
		}, "gridWatcher", this);
	},
	componentWillUnmount: function() {
		router.unWatchHashChange("gridWatcher");
	},
	render: function() {
		var list = this.state.list;
		var itemComps = list.map(function(item, index){
			return <Item key = {item.id}
					itemInfo = {item}
				contextMenuInit = {this.props.contextMenuInit} />
		}.bind(this));

		return (
			<div className="table-bd">
				{itemComps}
			</div>
		);
	}
});

module.exports = List;
