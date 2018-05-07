'use strict';

var url = require("../Utils/urls.js");
var regPage = function () { };


regPage.prototype = Object.create({}, {

    customerLoginBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button")); } },
    selectedLoginBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > form > button")); } },
    accountNameTxt: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(1) > strong > span")); } },
    depositBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(2)")); } },
    depositAmountField: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input")); } },
    transactionSucessNotif: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > span")); } },
    depositDoBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button")); } },
    backBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.fixedTopBox > button:nth-child(1)")); } },
    withdrawalBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(3)")); } },
    withdrawalAmountField: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input")); } },
    withdrawalDoBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button")); } },
    transactionsBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(1)")); } },
    firsttransactionAmountTxt: { get: function () { return element(by.css("#anchor0 > td:nth-child(2)")); } },
    firsttransactionTypeTxt: { get: function () { return element(by.css("#anchor0 > td:nth-child(3)")); } },
    secondtransactionAmountTxt: { get: function () { return element(by.css("#anchor1 > td:nth-child(2)")); } },
    secondtransactionTypeTxt: { get: function () { return element(by.css("#anchor1 > td:nth-child(3)")); } },

    getRegistrationPage: {
        value: function () {
            browser.get(url.registrationPageUrl);
        }
    },

    chooseDropdownOption: {
        value: function (option) {
            element(by.cssContainingText('option', option)).click();
        }
    }

});



module.exports = regPage;
