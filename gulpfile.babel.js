import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

gulp.task('default', () => console.log('Default task called'));


gulp.task('scss', (done) => {
    const stream = gulp
        .src('./static/scss/**/*.scss')
        .pipe(
            sass({
              //https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
                outputStyle: 'expanded'
            }).on('error', sass.logError)
        )
        .pipe(rename({basename:'style'}))
        // .pipe(gulp.dest('./static/scss/'));
        .pipe(gulp.dest('./static/styles/'));

    stream.on('end', () => {
        done();
    });

    stream.on('error', (err) => {
        done(err);
    });
});


gulp.task('scss:min', (done) => {
    const stream = gulp
        .src('./static/scss/**/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        // .pipe(sourcemaps.write())
        .pipe(rename({basename:'style.min'}))
        .pipe(gulp.dest('./static/styles/'));

    stream.on('end', () => {
        done();
    });

    stream.on('error', (err) => {
        done(err);
    });
});