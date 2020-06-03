let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let rename = require("gulp-rename");

gulp.task("default",async()=>{
    gulp.watch("./src/**/*",async ()=>{
        gulp.src("./src/**/*").pipe(gulp.dest("G:\\phpStudy\\WWW\\vip\\src"));
    })
    gulp.watch("./src/*.html",async()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeEmptyAttributes: true,
            minifyJS: true,
            minifyCSS:true
        }))
        .pipe(gulp.dest("G:\\phpStudy\\WWW\\vip"));
    })

    gulp.watch("./src/css/*.css",async ()=>{
        gulp.src("./src/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("G:\\phpStudy\\WWW\\vip\\css"));
    })

    gulp.watch("./src/js/*.js",async ()=>{
        gulp.src(["./src/js/index.js","./src/js/goodslist.js"])
        .pipe(concat("tools.js"))
        .pipe(gulp.dest("G:\\phpStudy\\WWW\\vip\\js"))
        .pipe(uglify())
        .pipe(rename("tools.min.js"))
        .pipe(gulp.dest("G:\\phpStudy\\WWW\\vip\\js"));
    })
})