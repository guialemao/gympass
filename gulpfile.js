// Inicialização e rquisições
var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var browserSync = require('browser-sync').create();
var compass = require('gulp-compass');


// Tarefas

gulp.task('compass', function() {
  gulp.src('development/scss/**/*.scss')
    .pipe(compass({
      config_file: 'development/config.rb',
      css: 'development/css',
      sass: 'development/scss'
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
		stream: true
	}))
});

// Task para o Browser Sync
gulp.task('browserSync',function(){
	browserSync.init({
		server: {
			baseDir: 'development'
		},
	});
});

// task para limpar public
gulp.task('clean:public', function() {
	return del.sync('public');
})

// Task para watch
gulp.task('watch', ['browserSync','compass'] ,function(){
	gulp.watch('development/scss/**/*.scss',['compass']);
	gulp.watch('development/*.html', browserSync.reload);
	gulp.watch('development/js/**/*.js', browserSync.reload);
});

// Task default
gulp.task('default', function(callback) {
	runSequence('clean:public', ['compass','browserSync','watch'],
        callback
    )
})