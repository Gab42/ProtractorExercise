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
    }
};