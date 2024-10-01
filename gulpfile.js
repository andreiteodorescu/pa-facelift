const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const pxtorem = require("postcss-pxtorem");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();

const paths = {
  scss: {
    src: "src/scss/project/**/*.scss",
    dest: "src/css/",
  },
  js: {
    dev: "src/js/dev/**/*.js",
    prod: "src/js/prod/",
  },
  html: {
    src: "src/pages/**/*.html",
  },
};

// Compile SCSS to CSS
function compileSCSS() {
  return gulp
    .src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream()); // Inject changes without full reload
}

// Minify CSS and convert px to rem
function minifyCSS() {
  return gulp
    .src(`${paths.scss.dest}styles.css`, { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        pxtorem({
          rootValue: 16,
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
        }),
      ])
    )
    .pipe(cleanCSS())
    .pipe(concat("styles.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream()); // Inject changes without full reload
}

// Concatenate and minify JS
function scripts() {
  return gulp
    .src(paths.js.dev)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(gulp.dest(paths.js.prod))
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.js.prod))
    .pipe(browserSync.stream()); // Inject changes without full reload
}

// Serve and watch for changes
function serve() {
  browserSync.init({
    port: 9000,
    server: {
      baseDir: "./src",
    },
  });

  gulp.watch(paths.scss.src, gulp.series(compileSCSS));
  gulp.watch(paths.js.dev, scripts);
  gulp.watch(paths.html.src).on("change", browserSync.reload);
}

// Define complex tasks
const build = gulp.series(compileSCSS, minifyCSS, scripts);
const watch = gulp.parallel(serve);

// Export tasks
exports.compileSCSS = compileSCSS;
exports.minifyCSS = minifyCSS;
exports.scripts = scripts;
exports.build = build;
exports.watch = watch;
exports.default = build;
