module.exports = {
    waitForTransaction: function (tableRows, transactionCounter){
        while (tableRows == 'undefined' && tableRows.length < transactionCounter || tableRows == 'undefined');
        {
            browser.sleep(100);
            browser.refresh();
            browser.waitForAngular();
        } 
    }
}