const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

<<<<<<< HEAD
function styles() {
=======
function styles(){
>>>>>>> 631ce4332e12561adee2c50e83575e2253b8898a
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

<<<<<<< HEAD
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

=======
exports.default = styles;
>>>>>>> 631ce4332e12561adee2c50e83575e2253b8898a
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
