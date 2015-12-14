var MenuList = React.createClass({

	getInitialState: function() {
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
	componentDidMount: function() {
		var self = this;
		var targets = this.props.target.split(",");

		$(document).on('contextmenu', function(e) {
			for(var i = 0; i < targets.length; i++) {
				if($(e.target).hasClass(targets[i])) {
					e.preventDefault();
					setTimeout(function() {
						self.setState({
							showMenu: true,
							left: e.clientX + 5 + "px",
							top: e.clientY + 5 + "px"
						});
					}, 100);
					return ;
				}
			}
		});
		$(document).on("click", function() {
			self.setState({
				showMenu: false
			});
		})
	},
	addFile: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.addFile ? this.props.addFile(menuInfo) : "";
	},
	upload: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.upload ? this.props.upload(menuInfo) : "";
	},
	addFolder: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.addFolder ? this.props.addFolder(menuInfo) : "";
	},
	addCode: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.addCode ? this.props.addCode(menuInfo) : "";
	},
	addMarkdown: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.addCode ? this.props.addMarkdown(menuInfo) : "";
	},
	edit: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.edit ? this.props.edit(menuInfo) : "";
	},
	rename: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.rename ? this.props.rename(menuInfo) : "";
	},
	delete: function(e) {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.delete ? this.props.delete(menuInfo) : "";
	},
	move: function() {
		var menuInfo = $(e.target).parents("li").get(0).dataset;

		this.setState({
			showMenu: false
		});
		this.props.move ? this.props.move(menuInfo) : "";
	},
	render: function() {
		return (
			<div style = {{position: "relative", left: 0, right: 0}}>
				<ul className = "widget-menu js-widget-menu" style = {{display: this.state.showMenu ? "block" : "none", left: this.state.left, top: this.state.top}}>
					<li data-menu-type = "addMarkdown" data-menu-type-text = "新建MD" onClick = {this.addMarkdown} style = {{display: this.state.showMarkdown ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-add-folder">&#xe617;</i></span>
						<span className = "menu-text">新建MD</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "addCode" data-menu-type-text = "新建代码" onClick = {this.addCode} style = {{display: this.state.showAddCode ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-add-file">&#xe61e;</i></span>
						<span className = "menu-text">新建代码</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "addFile" data-menu-type-text = "新建文档" onClick = {this.addFile} style = {{display: this.state.showAddFile ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-add-folder">&#xe601;</i></span>
						<span className = "menu-text">新建文档</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "upload" data-menu-type-text = "上传文档" onClick = {this.upload} style = {{display: this.state.showUpload ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-upload">&#xe60e;</i></span>
						<span className = "menu-text">上传文档</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "addFolder" data-menu-type-text = "新建文件夹" onClick = {this.addFolder} style = {{display: this.state.showAddFolder ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-add-file">&#xe614;</i></span>
						<span className = "menu-text">新建文件夹</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "edit" data-menu-type-text = "编辑" onClick = {this.edit} style = {{display: this.state.showEdit ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-add-file">&#xe60a;</i></span>
						<span className = "menu-text">编辑</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "rename" data-menu-type-text = "重命名" onClick = {this.rename} style = {{display: this.state.showRename ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-rename">&#xe61d;</i></span>
						<span className = "menu-text">重命名</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "delete" data-menu-type-text = "删除" onClick = {this.delete} style = {{display: this.state.showDelete ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-delete">&#xe613;</i></span>
						<span className = "menu-text">删除</span>
						<span className = "menu-mask"></span>
					</li>
					<li data-menu-type = "move" data-menu-type-text = "移动" onClick = {this.move} style = {{display: this.state.showMove ? "block" : "none"}}>
						<span className = "icon-wrap"><i className = "iconfont icon-move">&#xe609;</i></span>
						<span className = "menu-text">移动</span>
						<span className = "menu-mask"></span>
					</li>
				</ul>
			</div>
		);
	}
});

module.exports  =  MenuList;