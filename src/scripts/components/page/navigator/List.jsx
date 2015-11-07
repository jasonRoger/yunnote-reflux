var Item = require("./Item.jsx"),
	navActions = require("./action.es6"),
	navStore = require("./store.es6");

var List = React.createClass({
	mixins: [Reflux.listenTo(navStore.showStore, "onUpdateList")],
	getInitialState: function() {
		return {
			list: []
		};
	},
	onUpdateList: function(data) {
		this.setState({
			list: data
		});
		router.setHash({level: 0, type: "folder", handle: "show", id: data[0].id, src: ""});
	},
	setActiveStatus: function(navItem) {
		var navList = this.state.list;
		var activedItem = {};

		var newList = navList.map(function(item, index) {
			if(item.id == navItem.navItemId) {
				item.isActived = true;
				activedItem = item;
			}else {
				item.isActived = false;
			}
			return item;
		});

		this.setState({
			list: newList
		});
		router.replaceHash({level: 0, id: navItem.navItemId, type: "folder", handle: "show", src: ""});
	},
	componentDidMount: function() {
		navActions.showActions.getAll();
	},
	render: function() {
		var list = this.state.list;
		var itemComps = list.map(function(item, index){
				return <Item key = {item.id}
						itemInfo = {item}
						setActiveStatus = {this.setActiveStatus}
						contextMenuInit = {this.props.contextMenuInit} />
			}.bind(this));

		return (
			<ul className = "sidebar-list">
				{itemComps}
			</ul>
		);
	}
});

module.exports = List;