'use strict';

var url = require("../Utils/urls.js");

var CalculatorPage = function () {
    browser.get(url.calculatorPageUrl);
    //window.calculatorPageUrl
};


CalculatorPage.prototype = Object.create({}, {
    //variables
    firstField:     { get: function () { return element(by.css("input[ng-model='first']")); } },
    secondField:    { get: function () { return element(by.css("input[ng-model='second']")); } },
    goButton:       { get: function () { return element(by.id('gobutton')); } },
    result:         { get: function () { return element(by.css("div>form>h2")); } },


    //methods
    calcActions: {
        value: function (a) {
            switch (a) {
                case "+":
                    return element(by.cssContainingText('option', '+'));
                case "-":
                    return element(by.cssContainingText('option', '-'));
                case "*":
                    return element(by.cssContainingText('option', '*'));
                case "/":
                    return element(by.cssContainingText('option', '/'));
            }
        }
    },

    calculate: {
        value: function (num1, num2, operation) {
            this.firstField.sendKeys(num1);
            this.secondField.sendKeys(num2);
            this.calcActions(operation).click();
            this.goButton.click();
        }
    }

});

module.exports = CalculatorPage;