var gulp = require("gulp");
var server = require("gulp-webserver");
var sass = require("gulp-sass");

gulp.task("server", ["css", "watch"], function() {
    gulp.src("build")
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                next();
            }
        }))
});

gulp.task("css", function() {
    gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css/"))
});

gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", ["css"])
});

gulp.task("db", function() {
    gulp.src("src/**/*")
        .pipe(gulp.dest("build/"))
});