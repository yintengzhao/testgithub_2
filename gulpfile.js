var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var connect     = require('gulp-connect');
var minifyCSS   = require('gulp-minify-css');
var embedlr     = require('gulp-embedlr');
var notify      = require("gulp-notify");
var include     = require("gulp-include")
var tsc         = require("gulp-typescript");
var connect     = require('gulp-connect');
var npmDist     = require('gulp-npm-dist');

// Copy dependencies to ./public/libs/
gulp.task('copy:libs', function() {
  gulp.src(npmDist({copyUnminified: true}), {base:'./node_modules'})
    .pipe(gulp.dest('./dist/libs'));

  gulp.src(['none_npm/nixie/*'])
      .pipe(gulp.dest('./dist/libs/nixie-clock/'));
});

gulp.task('assets', function() {
    gulp.src(['app/assets/*'])
        .pipe(gulp.dest('dist/assets'))
        .pipe(connect.reload())
})

gulp.task('requirejs', function() {
    gulp.src(['node_modules/requirejs/require.js'])
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
})

gulp.task('scripts', function() {
    gulp.src(['app/src/js/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(connect.reload())

    gulp.src(['app/src/root.js'])
        .pipe(gulp.dest('dist/build'))
        .pipe(connect.reload())

    gulp.src(['app/src/ts/**/*.ts'])
        .pipe(tsc({
            noImplicitAny: true,
            module: 'AMD',
            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17239#issuecomment-309000880
            lib: [
              "dom",
              "es5",
              "scripthost",
              "es2015.iterable"
            ],
            target: "es5",
        }))
        .pipe(gulp.dest('dist/build'))
})

gulp.task('styles', function() {
    gulp.src(['app/css/application.scss'])
        .pipe(
          sass().on("error", notify.onError(function(error) {
            return "Error: " + error.message;
          })
        ))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(connect.reload())

    gulp.src("app/css/vendor.css")
        .pipe(include({
          extensions: "css",
          hardFail: true,
          includePaths: [
            __dirname + "/node_modules",
            __dirname + "/none_npm"
          ]
        }))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest("dist/build"));
})



gulp.task('html', function() {
    gulp.src("app/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
})

gulp.task('webserver', function() {
  connect.server({
    // port:80,
    root: 'dist',
    livereload: true
  });
});

gulp.task('init', ['scripts', 'styles', 'html', 'webserver', 'assets', 'requirejs', 'copy:libs'])

gulp.task('watch', ['init'], function() {
    gulp.watch('app/src/**', ['scripts']);
    gulp.watch('app/css/**', ['styles']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('app/assets/**', ['assets']);
    gulp.watch('package.json', ['copy:libs']);
})

gulp.task('default', ['watch']);
