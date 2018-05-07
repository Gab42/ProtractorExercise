'use strict';

var calcPage = require("./Pages/calculator.page.js");
var regPage = require("./Pages/registration.page.js");
var helper = require("./Utils/helper.js");
var until = protractor.ExpectedConditions;

describe('Registration', function () {
    var registrationPage = new regPage();
    registrationPage.getRegistrationPage();


    it('Login and verify account name', function () {
        registrationPage.customerLoginBtn.click();
        registrationPage.chooseDropdownOption("Harry Potter");
        registrationPage.selectedLoginBtn.click();
        expect(registrationPage.accountNameTxt.getText()).toEqual("Harry Potter");
    });

    it('Make a deposit', function () {
        registrationPage.depositBtn.click();
        registrationPage.depositAmountField.sendKeys("10000");
        registrationPage.depositDoBtn.click();
        expect(registrationPage.transactionSucessNotif.isPresent()).toBe(true);
        browser.sleep(3000);
    });

    it('Verify last transaction', function () {
        registrationPage.transactionsBtn.click();
        expect(registrationPage.firsttransactionAmountTxt.getText()).toEqual("10000");
        expect(registrationPage.firsttransactionTypeTxt.getText()).toEqual("Credit");
    });


    it('Make a withdrawal', function () {
        registrationPage.backBtn.click();
        registrationPage.withdrawalBtn.click();
        registrationPage.withdrawalAmountField.sendKeys("5000");
        registrationPage.withdrawalDoBtn.click();
        expect(registrationPage.transactionSucessNotif.isPresent()).toBe(true);
        browser.sleep(3000);
    });

    it('Verify last transaction 2', function () {
        registrationPage.transactionsBtn.click();
        expect(registrationPage.secondtransactionAmountTxt.getText()).toEqual("5000");
        expect(registrationPage.secondtransactionTypeTxt.getText()).toEqual("Debit");
        registrationPage.logoutBtn.click();
    });

    browser.sleep(3000);
   
});

/*
describe('Calculator', function () {

    
    var calculatorPage = new calcPage();

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
        page.calculate(num1, num2, "*");
        expect(page.result.getText()).toEqual((num1 * num2).toString());
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
*/
