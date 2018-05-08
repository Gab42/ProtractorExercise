'use strict';
var calculatorPage = new (require("./Pages/calculator.page.js"))();

var helper = require("./Utils/helper.js");
var until = protractor.ExpectedConditions;
var expectedResults = require("./Utils/expectedResults.json");

describe('Calculator', function () {


    beforeEach(function () {
        calculatorPage.getCalculatorPage();
    });


    it('Add two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        calculatorPage.calculate(num1, num2, "+");
        expect(calculatorPage.result.getText()).toEqual((num1+num2).toString());
    });
   
    it('Substract two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        calculatorPage.calculate(num1, num2, "-");
        expect(calculatorPage.result.getText()).toEqual((num1 - num2).toString());
    });

    it('Multiply two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        calculatorPage.calculate(num1, num2, "*");
        expect(calculatorPage.result.getText()).toEqual((num1 * num2).toString());
    });

    it('Divide two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        calculatorPage.calculate(num1, num2, "/");
        expect(calculatorPage.result.getText()).toEqual((num1 / num2).toString());
    });

    // todo: check that title/etc elements are present
    // compare screenshots for element alignment/etc?
    // test gobutton without input

});

