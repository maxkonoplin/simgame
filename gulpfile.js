const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const through2 = require('through2');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');

gulp.task('build-script', function(){
    return gulp.src(['sources/script/*.js'])
        .pipe(plumber())
        .pipe(through2.obj(function(file, enc, next){
            browserify(file.path)
                .transform('babelify', {presets: ['es2015'], extensions: ['.js']})
                .bundle(function(err, res){
                    if(err) return next(err, null);
                    file.contents = res;
                    next(null, file);
                });
        }))
        .pipe(uglify())
        .pipe(rename(function(path){
            path.extname = '.min.js';
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-style', function(){
    return gulp.src(['sources/style/*.styl'])
        .pipe(plumber())
        .pipe(stylus())
        .pipe(rename(function(path){
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', ['build-script', 'build-style'], function(){
    gulp.watch(['sources/script/**/*.js'], ['build-script']);
    gulp.watch(['sources/style/**/*.styl'], ['build-style']);
});

gulp.task('default', ['watch']);