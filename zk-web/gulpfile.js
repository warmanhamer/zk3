var gulp = require("gulp");
var webserver = require("gulp-webserver");
var sass = require("gulp-sass");
gulp.task("server", function() {
	return gulp.src("./src")
		.pipe(webserver({
			port: 9090,
			proxies: [{
				source: "/api/getlist",
				target: "http://localhost:3000/api/getlist"
			}]
		}))
})
gulp.task("scss", function() {
	return gulp.src("./src/sass/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./src/css"))
})
gulp.task("watch", function() {
	gulp.watch("./src/sass/**/*.scss", gulp.series("scss"))
})
gulp.task("default", gulp.series("scss", "server", "watch"))
