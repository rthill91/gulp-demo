var gulp = require('gulp');
var gutil = require('gulp-util');
var stylish = require('jshint-stylish');

var gulpConfig = require('./gulp-config'),
	base = gulpConfig.base,
	paths = gulpConfig.paths;


// Seeks out and requires plugins begining with 'gulp'
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/,
	camelize: true
});

// Flags
var isProduction = (gutil.env.dev ? false : true);

/**
	Helper Functions
**/
var changeEvent = function(evt) {
	gutil.log('File', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + base.src + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
}

/**
	Tasks
**/
gulp.task('appScripts', function() {
	return gulp.src(paths.src.js + '**/*.js')
		.pipe(plugins.order([
			'site/app/js/app.js',
			'**/*.js'
		]))
		.pipe(isProduction ? gutil.noop() : plugins.sourcemaps.init())
			.pipe(plugins.concat('playground.js'))
			.pipe(gulp.dest(paths.dest.js))
			.pipe(isProduction ? plugins.uglify({mangle:false}) : gutil.noop())
		.pipe(isProduction ? gutil.noop() : plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.dest.js));
});
gulp.task('pluginScripts', function() {
	return gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js'
	])
		.pipe(isProduction ? gutil.noop() : plugins.sourcemaps.init())
			.pipe(plugins.concat('plugins.js'))
			.pipe(gulp.dest(paths.dest.js))
			.pipe(isProduction ? plugins.uglify({mangle:false}) : gutil.noop())
		.pipe(isProduction ? gutil.noop() : plugins.sourcemaps.write())
		.pipe(gulp.dest(paths.dest.js));
});
gulp.task('css', function() {
	gulp.src(paths.src.styles + '*.scss')
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(gulp.dest(paths.dest.styles))
		.pipe(isProduction ? plugins.uglifycss() : gutil.noop())
		.pipe(gulp.dest(paths.dest.styles));
});
gulp.task('templates', function() {
	return gulp.src(paths.src.views + '*.html')
		.pipe(plugins.angularTemplatecache({standalone:true}))
		.pipe(gulp.dest(paths.dest.js));
});
gulp.task('lint', function() {
	return gulp.src(paths.src.js + '**/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter(stylish));
});

/**
	Watch & Default
**/
gulp.task('watch', ['default'], function() {
	gulp.watch(paths.src.js + '**/*.js', ['appScripts']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch(paths.src.styles + '*.scss', ['css']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch(paths.src.views + '*.html', ['templates']).on('change', function(evt) {
		changeEvent(evt);
	});
});

gulp.task('default', ['appScripts', 'pluginScripts', 'css', 'templates'], function() {
	// gulp.run is deprecated and will be removed in gulp 4.0
	// At the release of 4.0 it will be replaced with orchestrator.start
	// perhaps there is a better way to structure these tasks so that neither
	// is necessary?
	gulp.run('lint');
});
