var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
    return gulp.src('app.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'Task is completed' }));
});
