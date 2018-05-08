'use strict';

var custLoginPage = function () { };

custLoginPage.prototype = Object.create({}, {
    selectedLoginBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > form > button")); } },

    chooseDropdownOption: {
        value: function (selectedOption) {
            element(by.cssContainingText('option', selectedOption)).click();
        }
    }

});

module.exports = custLoginPage;