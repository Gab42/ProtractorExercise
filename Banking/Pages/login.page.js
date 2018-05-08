'use strict';
const url = require('../Utils/urls.json');

var loginPage = function () { };

loginPage.prototype = Object.create({}, {

    customerLoginBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button")); } },

    getPage: {
        value: function () {
            browser.get(url.bankingPageLoginUrl);
        }
    },
});

module.exports = loginPage;