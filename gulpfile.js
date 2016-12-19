const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('default', () =>
    gulp.src(['src/*.js', './node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
);