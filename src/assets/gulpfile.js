const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('default', ['compile', 'watch']);

gulp.task('compile', ['less', 'react'])

gulp.task('watch', function() {
	gulp.watch('less/*.less', ['less']);
	gulp.watch('js/*.jsx', ['react']);
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
	gulp.src(['js/home.jsx', 'js/wrapper.jsx', 'js/main.jsx'])
		.pipe(babel({presets: ['react', 'es2016']}))
		.pipe(concat('app.js'))
		.pipe(plumber())
		.pipe(gulp.dest('../public/js'));
});