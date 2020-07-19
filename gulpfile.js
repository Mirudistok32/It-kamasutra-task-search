const gulp = require("gulp"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cssmin = require("gulp-cssmin");

gulp.task("sass", () => {
  return gulp
    .src("app/scss/style.scss")
    .pipe(
      sass({ outputStyle: "compressed" }).addListener("error", sass.logError)
    )
    .pipe(rename("style.min.css"))
    .pipe(autoprefixer())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("style", () => {
  return gulp
    .src(["node_modules/normalize.css/normalize.css"])
    .pipe(concat("libs.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("app/css"));
});

gulp.task("html", () => {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", () => {
  return gulp.src("app/js/**/*.js").pipe(browserSync.reload({ stream: true }));
});

// gulp.task("script", () => {
//   return gulp
//     .src([])
//     .pipe(concat("libs.min.js"))
//     .pipe(uglify())
//     .pipe(gulp.dest("app/js"));
// });

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
});

gulp.task("watch", () => {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/**/*.js", gulp.parallel("js"));
});

gulp.task(
  "default",
  gulp.parallel("style", "sass", /*"script",*/ "watch", "browser-sync")
);
