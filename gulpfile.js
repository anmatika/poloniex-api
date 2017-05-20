const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('watch-mocha', () => {
    // run in oneshot
    gulp.start('mocha');
    // start watching
    gulp.watch(['test/**'], ['mocha']);
});

gulp.task('mocha', () => {
    return gulp.src(['test/*.js'], {
        read: false
        })
        .pipe(mocha({
            reporter: 'list',
            require: 'co-mocha'
        }))
        .on('error', gutil.log);
});


gulp.task('default', ['watch-mocha']);
