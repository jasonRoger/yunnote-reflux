var React = require('react'),
	Reflux = require("reflux"),
	antd = require('antd'),
	Modal = antd.Modal,
	pdfActions = require("./action.es6"),
	pdfStore = require("./store.es6");

var Operator = React.createClass({
	mixins: [Reflux.listenTo(pdfStore, "onOperateStatus")],
	getInitialState: function() {
		return {
			name: "",
			file: null
		};
	},
	//用于处理新增的后续操作
	onOperateStatus: function(res) {
		var hashObj = router.getHashObject();
		if(res && res.ret) {
			router.replaceHash({
				type: "folder",
				handle: "show"
			});
		}else {
			Modal.error({
			    title: '错误提示： ',
			    content: res.errmsg
			});
		}
	},
	fileChange: function(e) {
		var file = e.target.files[0];

		if(file && file.type != "application/pdf") {
			Modal.error({
			    title: '错误提示： ',
			    content: "仅支持pdf文件！"
			});
			this.setState({
				name: "",
				file: null
			});
			return ;
		}
		if(file && file.size >= 20971520 * 5) {
			Modal.error({
			    title: '错误提示： ',
			    content: "请上传小于20M的pdf文件！"
			});
			this.setState({
				name: "",
				file: null
			});
			return ;
		}
		this.setState({
			name: file.name,
			file: file
		});
	},
	handleChange: function(e) {
		this.setState({
			name: e.target.value
		});
	},
	handleSave: function() {
		this.validateData() ? this.submitData() : "";
	},
	handleEnter: function(e) {
		e.keyCode == 13 && this.validateData() ? this.submitData() : "";
	},
	handleCancel: function() {
		router.replaceHash({
			type: "folder",
			handle: "show"
		});
	},
	validateData: function() {
		if(this.state.name.trim() == "" || !this.state.file) {
			Modal.error({
			    title: '错误提示： ',
			    content: "pdf文件不得空！"
			  });
			return ;
		}
		return true;
	},
	submitData: function() {
		var hashObj = router.getHashObject(),
			formData =  new FormData();

		formData.append("name", this.state.name);
		formData.append("pdfFile", this.state.file);
		formData.append("pid", hashObj.id);
		formData.append("type", "pdf");
		formData.append("level", parseInt(hashObj.level) + 1);

		pdfActions.upload(formData);
	},
	render: function() {
		return (
			<div className = "m-upload">
				<input ref = "uploadInput" type="text"
					onChange = {this.handleChange}
					className = "upload-text"
					value = {this.state.name}
					onKeyUp = {this.handleEnter}
					placeholder = "上传文档后可以在此更改文档名！" />
				<span className = "upload-btn">
					<input type="file" onChange={this.fileChange} name="pdfFile"></input>
					<button className = "btn-mask">
						<span className = "icon-wrap"><i className = "iconfont icon-upload">&#xe60e;</i></span>
						<span>点击上传</span>
					</button>
				</span>
				<span className="base-btn save-btn" onClick={this.handleSave} >保存</span>
				<span className="base-btn save-btn" onClick={this.handleCancel}>返回</span>
			</div>
		);
	}
});

module.exports = Operator;