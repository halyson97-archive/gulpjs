var gulp = require('gulp');
var runSequence = require('run-sequence');
var server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      port: 8081, //deafult: 8000
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', function(cb) {
 
	return runSequence('webserver', cb);

});