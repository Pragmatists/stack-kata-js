module.exports = function (config) {
    config.set({

        basePath: '',
        files: [
            'src/**/*.js'
        ],

        singleRun: false,
        autoWatch: true,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        frameworks: [
            'jasmine'
        ],

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],

        reporters: ['spec'],

        // see https://github.com/mlex/karma-spec-reporter
        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: true,
            suppressSkipped: false
        }
    });
};
