module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs2-launcher'),
      require('phantomjs2')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'dist/vendor/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'dist/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false },

      { pattern: 'config/karma-test-shim.js', included: true, watched: false },

      // Distribution folder.
      { pattern: 'dist/**/*', included: false, watched: false }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/vendor/**/*.spec.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS2'],
    singleRun: true
  });
};
