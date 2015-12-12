var gulp = require("gulp"),
	gulpLoadPlugins = require("gulp-load-plugins"),
	named = require("vinyl-named"),
	plugins = gulpLoadPlugins();

gulp.task("min", function() {
	gulp.src(['./editormd.js'])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist'));
});
