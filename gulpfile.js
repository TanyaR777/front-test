const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
del = require('del')
var browserSync = require('browser-sync').create();


gulp.task('html', function () {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'))
      .pipe(browserSync.stream());
  });


gulp.task('css', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', notify.onError())
        .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
  });


  gulp.task('img', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
  });


  gulp.task('js', function () {
    return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      "./node_modules/owl.carousel2/dist/owl.carousel.min.js",
      './src/js/*.js'
    ])
          .pipe(concat('all.js'))
          .pipe(uglify())
          .pipe(gulp.dest('build/js'))
  });

  gulp.task('watch', function() {
 
    browserSync.init({
      server: "./build"
  });
  
    gulp.watch('src/scss/*.scss', gulp.series('css')).on('change', browserSync.reload);
    gulp.watch("src/scss/components/*.scss", gulp.series('css'));
    gulp.watch("src/scss/components/extends/*.scss", gulp.series('css'));
    gulp.watch("src/scss/components/extends/mixins/*.scss", gulp.series('css'));
    gulp.watch('src/js/**/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('src/*.html',  gulp.series('html')).on('change', browserSync.reload);
   });
  


  gulp.task('build', gulp.series('js', 'html', 'css', 'img'));


  gulp.task('default', gulp.series('build', 'watch'));


