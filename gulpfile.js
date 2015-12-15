var gulp = require("gulp"),
	browserSync = require('browser-sync').create(),
	gulpLoadPlugins = require("gulp-load-plugins"),
	webpackConfigNormal = require("./webpack.config.normal.js"),
	webpackConfigComps = require('./webpack.config.comps.js'),
	named = require("vinyl-named"),
	plugins = gulpLoadPlugins();
/*
*@ DEVCSSENTRY css入口文件路径
*@ DEVCSSWATCH css监控文件路径
*@ CSSDIST css打包编译后路径
*@ DEVJSCOMPENTRY react组件入口文件路径
*@ DEVJSCOMPWATCH 监控react组件文件路径
*@ DEVJSNORMALENTRY 一般js入口文件路径
*@ JSDIST js打包编译后路径
*@ DEVRELOAD 文件改变时重启服务器监控路径
*@ PROXY 欲代理服务器域名或者ip
*@ SERVERROOT 启动本地服务的根目录
*/
var PATH = {
	DEVCSSENTRY: ["./src/styles/*.scss"],
	DEVCSSWATCH: ["./src/styles/**/*.scss"],
	CSSDIST: "./public/styles/",
	DEVJSCOMPENTRY: ["./src/scripts/*.jsx"],
	DEVJSCOMPWATCH: ["./src/scripts/components/**/*.@(jsx|es6|js)", "./src/scripts/*.jsx"],
	DEVJSNORMALENTRY: ["./src/scripts/*.js"],
	DEVJSNORMALWATCH: ["./src/scripts/**/*.js", "!./src/scripts/components/**/*.js"],
    JSDIST: "./public/scripts/",
	DEVRELOAD: ["./public/scripts/**/*.js", "./public/styles/**/*.css"],
	VER: "./vers",
	PROXY: "http://localhost:3000",
	SERVERROOT: "."
}
gulp.task('webpackNormalJs', function() {
	gulp.src(PATH.DEVJSNORMALENTRY)
	.pipe(named())
	.pipe(plugins.webpack(webpackConfigNormal))
	.pipe(gulp.dest(PATH.JSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
});
//js es6和jsx编译与打包
gulp.task("webpackComps", function() {
	gulp.src(PATH.DEVJSCOMPENTRY)
	.pipe(named())
	.pipe(plugins.webpack(webpackConfigComps))
	.pipe(gulp.dest(PATH.JSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
});
//sass编译
gulp.task("sass", function() {
	plugins.rubySass(PATH.DEVCSSENTRY, { style: 'expanded' })
	.pipe(gulp.dest(PATH.CSSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
})
//清空css和js
gulp.task("clean", function() {
	gulp.src([PATH.CSSDIST, PATH.JSDIST])
	.pipe(plugins.clean());
});
//css压缩
gulp.task("minCss", function() {
	plugins.rubySass(PATH.DEVCSSENTRY, { style: 'expanded' })
	.pipe(plugins.minifyCss())
	.pipe(gulp.dest(PATH.CSSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
});
//js压缩
gulp.task("minNormalJs", function() {
	gulp.src(PATH.DEVJSNORMALENTRY)
	.pipe(named())
	.pipe(plugins.webpack(webpackConfigNormal))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(PATH.JSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
});
gulp.task("minComps", function() {
	gulp.src(PATH.DEVJSCOMPENTRY)
	.pipe(named())
	.pipe(plugins.webpack(webpackConfigComps))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(PATH.JSDIST))
	.pipe(plugins.rev())
	.pipe(plugins.rev.manifest({base: PATH.VER, merge: true}))
	.pipe(gulp.dest('refs'));
});
//启动本地服务
gulp.task("browserSyncServer", function() {
	browserSync.init({
		server: {
			baseDir: PATH.SERVERROOT
		},
		port: 8080,
		ui: {
			port: 8081
		},
		browser: "chromium"
	});
	gulp.watch(PATH.DEVRELOAD).on("change", browserSync.reload);
});
//开启代理服务
gulp.task("browserSyncProxy", function() {
	browserSync.init({
		proxy: PATH.PROXY,
		port: 8080,
		ui: {
			port: 8081
		},
		browser: "chromium"
	});
	gulp.watch(PATH.DEVRELOAD).on("change", browserSync.reload);
});
//压缩代码
gulp.task("min", ["clean", "minCss", "minNormalJs", "minComps"]);
//监控
gulp.task("watch", function() {
	gulp.watch(PATH.DEVJSCOMPWATCH, ["webpackComps"]);
	gulp.watch(PATH.DEVJSNORMALWATCH, ["webpackNormalJs"]);
	gulp.watch(PATH.DEVCSSWATCH, ["sass"]);
});
//启动服务并监控代码
gulp.task("proxy", ["browserSyncProxy", "watch"]);
//启动代理并监控代码
gulp.task("server", ["browserSyncServer", "watch"]);
//默认执行监控
gulp.task("default", ["watch"]);

