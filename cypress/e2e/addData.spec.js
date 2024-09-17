describe("Register new user for tests", () => {
  beforeEach(() => {
    // Clearing cookies and visiting the website
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("Should allow the user to create new account", () => {
    // Click register button
    cy.xpath("//a[text()='Register']").click();

    // Completing the registration form
    cy.get("#customer\\.firstName").type("John");
    cy.get("#customer\\.lastName").type("Smith");
    cy.get("#customer\\.address\\.street").type("Seneca St");
    cy.get("#customer\\.address\\.city").type("New York");
    cy.get("#customer\\.address\\.state").type("New York");
    cy.get("#customer\\.address\\.zipCode").type("10310");
    cy.get("#customer\\.phoneNumber").type("1-212-1234567");
    cy.get("#customer\\.ssn").type("AAA-GG-SSSS");

    // Completing the login form
    cy.get("#customer\\.username").type("john123");
    cy.get("#customer\\.password").type("zaq1@WSX");
    cy.get("#repeatedPassword").type("zaq1@WSX");

    // Click register button
    cy.get("input.button").contains("Register").click();
    // Check if everything went good
    cy.get("#rightPanel").should(
      "contain.text",
      "Your account was created successfully."
    );

    // Define type of Account I would like to open
    const savingsAccount = "SAVINGS";

    // Click open new account in manu
    cy.xpath("//a[text()='Open New Account']").click();
    // Select 'Savings' type of account
    cy.get("#type").select(savingsAccount);
    // Click submit button
    cy.get('input[type="button"]').click();

    // Verify open account success
    cy.get("#openAccountResult").should("openAccountResult");
    // Logout
    cy.xpath("//a[text()='Log Out']").click();
  });
});
