'use strict';

var custHomePage = function () { };

custHomePage.prototype = Object.create({}, {

    accountNameTxt: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(1) > strong > span")); } },
    depositBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(2)")); } },
    withdrawalBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(3)")); } },
    transactionsBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(5) > button:nth-child(1)")); } },
    depositAmountField: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input")); } },
    transactionSucessNotif: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > span")); } },
    depositDoBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button")); } },
    withdrawalAmountField: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > div > input")); } },
    withdrawalDoBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.container-fluid.mainBox.ng-scope > div > form > button")); } },
    lastTableRow: { get: function () { return element.all(by.css("body > div.ng-scope > div > div.ng-scope > div > div:nth-child(2) > table > tbody > tr")).last(); } },
    transactionAmountTxt: { get: function () { return this.lastTableRow.element(by.css("td:nth-child(2)")); } },
    transactionTypeTxt: { get: function () { return this.lastTableRow.element(by.css("td:nth-child(3)")); } },
    logoutBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.box.mainhdr > button.btn.logout")); } },
    backBtn: { get: function () { return element(by.css("body > div.ng-scope > div > div.ng-scope > div > div.fixedTopBox > button:nth-child(1)")); } },

});

module.exports = custHomePage;