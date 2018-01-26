var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var mainNpmFiles = require('gulp-main-npm-files');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var notify = require('gulp-notify');

gulp.task('styl', function() {
  gulp
    .src('./src/stylus/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ include: 'node_modules' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('pug', function() {
  return gulp
    .src('./src/pug/pages/*.pug')
    .pipe(
      pug({
        pretty: true,
      }),
    )
    .on('error', notify.onError())
    .pipe(gulp.dest('build'));
});

gulp.task('copy-assets', function() {
  return gulp.src('./src/assets/**').pipe(gulp.dest('build'));
});

gulp.task('copy-npm-files', function() {
  gulp.src(mainNpmFiles()).pipe(gulp.dest('build/vendor'));
  gulp
    .src('./node_modules/normalizecss/normalize.css')
    .pipe(gulp.dest('build/vendor'));
  gulp
    .src('./node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('build/vendor'));
});

gulp.task('build', function() {
  gulp.run(['styl', 'pug', 'copy-assets', 'copy-npm-files']);
});

gulp.task('watch', function() {
  gulp.watch('./package.json', ['copy-npm-files']);
  gulp.watch('./src/stylus/**/*.styl', ['styl']);
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/assets/**/*.*', ['copy-assets']);
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  });
  gulp.run('watch');
  browserSync.watch('./build', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);
