describe("Pay bill test", () => {
  beforeEach(() => {
    // Clearing cookies and visiting the website
    cy.clearCookies();
    // Visit page
    cy.visit("http://localhost:8080/parabank/index.htm");
    // Login
    cy.get('#loginPanel input[name="username"]').type("john123");
    cy.get('#loginPanel input[name="password"]').type("zaq1@WSX");
    cy.get('#loginPanel input[type="submit"]').click();
  });

  it("Should pay the bill", () => {
    // Click Bill Pay option
    cy.get('#leftPanel a[href*="billpay.htm"]').click();

    // Fill the form with user data
    cy.get('input[name="payee.name"]').type("Jonatan");
    cy.get('input[name="payee.address.street"]').type("Forest Ave");
    cy.get('input[name="payee.address.city"]').type("New York");
    cy.get('input[name="payee.address.state"]').type("New York");
    cy.get('input[name="payee.address.zipCode"]').type("10310");
    cy.get('input[name="payee.phoneNumber"]').type("1-212-1234576");
    cy.get('input[name="payee.accountNumber"]').type("13566");
    cy.get('input[name="verifyAccount"]').type("13566");
    cy.get('input[name="amount"]').type("10");
    cy.get('select[name="fromAccountId"]').select(0); // From account
    cy.get('input[type="button"]').click();

    // Verify registration success
    cy.get("#billpayResult").should("contain", "Bill Payment Complete");
    // Logout
    cy.xpath("//a[text()='Log Out']").click();
  });
});
