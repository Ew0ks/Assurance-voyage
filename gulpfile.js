var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucks = require('gulp-nunjucks');

gulp.task('template', [], function () {
    return gulp
        .src('res/template/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('style', function () {
    return gulp
        .src('res/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('web/'))
        ;
});

gulp.task('style:watch', function () {
    gulp.watch('res/scss/*.scss', ['style']);
});

gulp.task('template:watch', function () {
    gulp.watch('res/template/*.html', ['template']);
});

gulp.task('watch', ['default', 'style:watch', 'template:watch']);
gulp.task('default', ['template', 'style']);