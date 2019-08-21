const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const sourceMap = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const wait = require('gulp-wait')

gulp.task('comp-sass', () => {
    return gulp.src('assets/css/**/*.scss')
    .pipe(wait(200))
    .pipe(sourceMap.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourceMap.write('/'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream())
})

gulp.task('ug-css', ['comp-sass'], () => {
    return gulp.src('assets/css/*.css')
    .pipe(cssmin())
    .pipe(rename('style.min.css'))
    .pipe('assets/css')
})

gulp.task('watch', () => {
    gulp.watch('assets/css/**/*.scss', ['comp-sass']);
})