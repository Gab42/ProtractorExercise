var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine2',
    specs: ['spec.js'],
    chromeOnly: true,
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'report/screenshots'
        }).getJasmine2Reporter());
    }
};