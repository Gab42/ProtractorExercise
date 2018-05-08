'use strict';

// create page objects
var loginPage = new (require("./Pages/login.page.js"))();
var custLoginPage = new (require("./Pages/customerLogin.page.js"))();
var custHomePage = new (require("./Pages/customerHome.page.js"))();

var helper = require("./Utils/helper.js");
var until = protractor.ExpectedConditions;
var expectedResults = require("./Utils/expectedResults.json");

var transactionCounter = 0;

describe('Banking', function () {
  
   
    it('Login and verify account name', function () {
        loginPage.getPage();
        loginPage.customerLoginBtn.click();
        custLoginPage.chooseDropdownOption("Harry Potter");
        custLoginPage.selectedLoginBtn.click();
        expect(custHomePage.accountNameTxt.getText()).toEqual(expectedResults.accountName);
    });

    it('Make a deposit', function () {
        custHomePage.depositBtn.click();
        custHomePage.depositAmountField.sendKeys("10000");
        custHomePage.depositDoBtn.click();
        transactionCounter++;
        expect(custHomePage.transactionSucessNotif.isPresent()).toBe(true);
    });

    it('Verify last transaction is deposit', function () {
        // Refresh page until last transaction appears in list
        helper.waitForTransaction(custHomePage.tableRows, transactionCounter);

        custHomePage.transactionsBtn.click();
        expect(custHomePage.transactionAmountTxt.getText()).toEqual("10000");
        expect(custHomePage.transactionTypeTxt.getText()).toEqual("Credit");
    });


    it('Make a withdrawal', function () {
        custHomePage.backBtn.click();
        custHomePage.withdrawalBtn.click();
        custHomePage.withdrawalAmountField.sendKeys("5000");
        custHomePage.withdrawalDoBtn.click();
        transactionCounter++;
        expect(custHomePage.transactionSucessNotif.isPresent()).toBe(true);
    });

    it('Verify last transaction is withdrawal', function () {
        custHomePage.transactionsBtn.click();

        // Refresh page until last transaction appears in list
        helper.waitForTransaction(custHomePage.tableRows, transactionCounter);

        expect(custHomePage.transactionAmountTxt.getText()).toEqual("5000");
        expect(custHomePage.transactionTypeTxt.getText()).toEqual("Debit");
        custHomePage.logoutBtn.click();

    }); 
});

