var gulp = require("gulp"),
	gulpLoadPlugins = require("gulp-load-plugins"),
	named = require("vinyl-named"),
	plugins = gulpLoadPlugins();

gulp.task("min", function() {
	gulp.src(['./editormd.js'])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist'));
});

gulp.task("minlib", function() {
	gulp.src(['./lib/mdlib.js'])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist'));
});

gulp.task("mincode", function() {
	gulp.src(['./lib/codemirror/codemirror.js'])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist'));
});