'use strict';

var custLoginPage = function () { };

custLoginPage.prototype = Object.create({}, {
    selectedLoginBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > form > button")); } },

    chooseDropdownOption: {
        value: function (option) {
            element(by.cssContainingText('option', option)).click();
        }
    }

});

module.exports = custLoginPage;