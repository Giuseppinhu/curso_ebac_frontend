const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function minifyImages(){
    console.log('Iniciando minificação.')
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
    .on('end', function() {
        console.log('Finalizando minificação.');
    })
}

function minSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'   
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
};

function minJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(minifyImages));
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(minSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(minJS));
}