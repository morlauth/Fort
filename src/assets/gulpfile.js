const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('default', ['compile', 'watch']);

gulp.task('compile', ['less', 'react'])

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
	gulp.watch('js/*.js', ['react']);
});

gulp.task('less', function() {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(cleancss())
		.pipe(concat('app.css'))
		.pipe(plumber())
		.pipe(gulp.dest('../public/css'));
});
gulp.task('react', function() {
	gulp.src('js/*.js')
		.pipe(babel({presets: ['es2015']}))
		.pipe(concat('app.js'))
		.pipe(minify())
		.pipe(plumber())
		.pipe(gulp.dest('../public/js'));
});