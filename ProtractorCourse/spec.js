'use strict';

var calculatorPage = require("./Pages/calculator.page.js");
var helper = require("./Utils/helper.js");

describe('Calculator', function () {

    var until = protractor.ExpectedConditions;
    var page;

    beforeEach(function () {
        page = new calculatorPage();
    });


    it('Add two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        page.calculate(num1, num2, "+");
        expect(page.result.getText()).toEqual((num1+num2).toString());
    });
   
    it('Substract two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        page.calculate(num1, num2, "-");
        expect(page.result.getText()).toEqual((num1 - num2).toString());
    });

    it('Multiply two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        page.calculate(num1, num2, "*");
        expect(page.result.getText()).toEqual((num1 * num2).toString());
    });

    it('Divide two numbers', function () {
        var num1 = helper.randomNumber();
        var num2 = helper.randomNumber();
        page.calculate(num1, num2, "/");
        expect(page.result.getText()).toEqual((num1 / num2).toString());
    });
});


/*describe('Registration', function () {

    it('open page', function () {
        browser.driver.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    it('Fill in username', function () {
        element(by.id('username')).sendKeys('angular');
    });

    it('Fill in password', function () {
        element(by.id('password')).sendKeys('password');
    });

    it('Fill in required username*', function () {
        element(by.id('formly_1_input_username_0')).sendKeys('testUsername');
    });

    it('Click login', function () {
        element(by.className('btn btn-danger')).click();
    });

    it('Click logout', function () {
        element(by.linkText('Logout')).click();
        browser.sleep(3000);
    });

});*/