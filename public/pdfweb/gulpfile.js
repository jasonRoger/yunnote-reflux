var gulp = require("gulp"),
	gulpLoadPlugins = require("gulp-load-plugins"),
	named = require("vinyl-named"),
	plugins = gulpLoadPlugins();

gulp.task("min", function() {
	gulp.src(['web/viewer.js', 'build/pdf.worker.js', 'build/pdf.js', 'web/compatibility.js', 'web/l10n.js', 'web/debugger.js'])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist'));
});

gulp.task("minCss", function() {
	gulp.src(['web/viewer.css'])
	.pipe(plugins.minifyCss())
	.pipe(gulp.dest('./dist'));
});