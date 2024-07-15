const gulp = require('gulp');
const gulpFont = require('gulp-font');

gulp.task('buildFonts', async function () {
    console.log('starts');
    await gulp.src('./examples/fonts/.{ttf,otf}', { read: false })
          .pipe(gulpFont({
              ext: '.css',
              fontface: './examples/fonts/',
              relative: './examples/fonts/',
              dest: './examples/fonts/',
              embed: ['woff'],
              collate: false
          }))
          .pipe(gulp.dest('./examples/fonts/'));
  console.log('finishes');
});