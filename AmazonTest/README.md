INTRODUCTION
------------

The written test examples can be seen above under AmazonPurchaseTestCases.xlsx

The test file that was composed is located in cypress/integration/amazonTestOrder

After getting an error on amazon.com that halted testing, I was able to find a solution that allowed me to prevent Cypress from failing the test. This addition was included in support/index.js

The base URL, https://www.amazon.com, was set in cypress.json to improve the functionality of the tests
