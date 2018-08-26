var webdriver = require('selenium-webdriver');
var browsers = require('./browsers.json')

// Should print number of browsers in browsers.json file which is 10
console.log(browsers.length)

// For browsers.length is not equal to zero
    // If parallel session is not zero. Hint: try importing automateStatus.js.
        // Run this test

/* Test Start */
var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  debugger;
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});
/* Test End */