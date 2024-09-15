// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("registerNewUser", () => {
  cy.visit("http://localhost:8080/parabank/index.htm");

  cy.xpath("//a[text()='Register']").click();
  cy.get("#customer\\.firstName").type("John");
  cy.get("#customer\\.lastName").type("Smith");
  cy.get("#customer\\.address\\.street").type("Seneca St");
  cy.get("#customer\\.address\\.city").type("New York");
  cy.get("#customer\\.address\\.state").type("New York");
  cy.get("#customer\\.address\\.zipCode").type("10310");
  cy.get("#customer\\.phoneNumber").type("1-212-1234567");
  cy.get("#customer\\.ssn").type("AAA-GG-SSSS");
  cy.get("#customer\\.username").type("john123");
  cy.get("#customer\\.password").type("zaq1@WSX");
  cy.get("#repeatedPassword").type("zaq1@WSX");
  cy.get("input.button").contains("Register").click();
  cy.get("#rightPanel").should(
    "contain.text",
    "Your account was created successfully."
  );

  const savingsAccount = "SAVINGS";
  cy.xpath("//a[text()='Open New Account']").click();
  cy.get("#type").select(savingsAccount);
  cy.get('input[type="button"]').click();
  cy.xpath("//a[text()='Log Out']").click();
});

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
