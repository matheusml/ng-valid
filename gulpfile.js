var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('default', function() {
    return gulp.src('app.js')
        .pipe(uglify())
        .pipe(rename('ng-valid.min.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'Task is completed' }));
});
