var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp')
 
gulp.task('less', function () {
  return gulp.src('./src/less/style.less')
   
    .pipe(less())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch( './src/less/*.less', [ 'less' ])
});