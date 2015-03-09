var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCSS    = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return sass(config.src, config.settings) 
        .on('error', handleErrors)
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});