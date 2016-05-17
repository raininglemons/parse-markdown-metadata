"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');

gulp.task('default', () => {
  return gulp.src('source.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename("index.js"))
    .pipe(gulp.dest('./'));
});