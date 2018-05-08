'use strict';

var bankPage = require("./Pages/banking.page.js");
var helper = require("./Utils/helper.js");
var until = protractor.ExpectedConditions;
var expectedResults = require("./Utils/expectedResults.json");

describe('Banking', function () {
    var bankingPage = new bankPage();
    bankingPage.getPage();

    it('Login and verify account name', function () {
        bankingPage.customerLoginBtn.click();
        bankingPage.chooseDropdownOption("Harry Potter");
        bankingPage.selectedLoginBtn.click();
        expect(bankingPage.accountNameTxt.getText()).toEqual(expectedResults.accountName);
    });

    it('Make a deposit', function () {
        bankingPage.depositBtn.click();
        bankingPage.depositAmountField.sendKeys("10000");
        bankingPage.depositDoBtn.click();
        expect(bankingPage.transactionSucessNotif.isPresent()).toBe(true);
        browser.sleep(2000);
    });

    it('Verify last transaction is deposit', function () {
        bankingPage.transactionsBtn.click();
        expect(bankingPage.transactionAmountTxt.getText()).toEqual("10000");
        expect(bankingPage.transactionTypeTxt.getText()).toEqual("Credit");
    });


    it('Make a withdrawal', function () {
        bankingPage.backBtn.click();
        bankingPage.withdrawalBtn.click();
        bankingPage.withdrawalAmountField.sendKeys("5000");
        bankingPage.withdrawalDoBtn.click();
        expect(bankingPage.transactionSucessNotif.isPresent()).toBe(true);
        browser.sleep(2000);
    });

    it('Verify last transaction is withdrawal', function () {
        bankingPage.transactionsBtn.click();
        expect(bankingPage.transactionAmountTxt.getText()).toEqual("5000");
        expect(bankingPage.transactionTypeTxt.getText()).toEqual("Debit");
        bankingPage.logoutBtn.click();
        browser.sleep(2000);
    }); 
});

