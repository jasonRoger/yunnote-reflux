var React = require('react'),
	Reflux = require('reflux'),
	wordActions = require('./action.es6'),
	wordStore = require('./store.es6'),
	Path = require("../../../lib/path/index.jsx");

var Detail = React.createClass({
	mixins: [Reflux.listenTo(wordStore.showStore, "onUpdateDetail")],
	getInitialState: function() {
		return {
			detail: ""
		};
	},
	onUpdateDetail: function(data) {
		this.setState({
			detail: data.detail
		});
	},
	editArticle: function() {
		router.replaceHash({
			handle: "edit"
		});
	},
	componentDidMount: function() {
		wordActions.showActions.getWord({id: router.getHashObject().id});
	},
	componentDidUpdate: function() {
		uParse(".js-detail");
	},
	render: function() {
		return (
			<div className = "article">
				<div className = "article-hd">
					<div className = "show-article">
						<div className = "path-wrapper">
							<Path />
						</div>
						<div className = "base-btn save-btn" onClick = {this.editArticle} >编辑</div>
					</div>
				</div>
				<div className = "article-bd">
					<div className = "js-detail" dangerouslySetInnerHTML = {{__html: this.state.detail}} ></div>
				</div>
			</div>
		);
	}
});

module.exports = Detail;