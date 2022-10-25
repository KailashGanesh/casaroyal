const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const svgSprite = require('gulp-svg-sprite');

//compile, prefix, and min scss
function compilescss() {
    return src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist')) // change to your final/public directory
};

//optimize and move images
function optimizeimg() {
    return src('src/images/*')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 2 }),
        ]))
        .pipe(imagewebp())
        .pipe(dest('dist/images')) // change to your final/public directory
};

//optimize and move images
function webpImage() {
    return src('dist/images/*') // change to your source directory
        .pipe(imagewebp())
        .pipe(dest('dist/images')) // change to your final/public directory
};

// make svg sprite

const svgSpriteConfig = {
    "dest": "dist/",
    "mode": {
        "stack": true
    }
}
function makeSvgSprite() {
    return src('**/*.svg','src/svg/')
        .pipe(svgSprite(svgSpriteConfig)).on('error', function(error){ console.log(error); })
        .pipe(dest('dist/'))
}

// minify js
function jsmin() {
    return src('src/js/*.js', {sourcemaps: true}) // change to your source directory
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(dest('dist/js', {sourcemaps: '.'})); // change to your final/public directory
}

//watchtask
function watchTask() {
    watch('src/sass/', compilescss);
    watch('src/js/*.js', jsmin);
    watch('src/images/*', optimizeimg);
    // watch('src/svg/*', makeSvgSprite);
    // watch('dist/images/*.{jpg,png}', webpImage);
}

// Default Gulp task 
exports.default = series(
    compilescss,
    jsmin,
    optimizeimg,
    // webpImage,
    // makeSvgSprite,
    watchTask
);