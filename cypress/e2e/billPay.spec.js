describe("Pay bill test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/parabank/index.htm");
    cy.get('#loginPanel input[name="username"]').type("john123");
    cy.get('#loginPanel input[name="password"]').type("John123");
    cy.get('#loginPanel input[type="submit"]').click();
  });

  it("Should request for a Loan", () => {
    cy.get('#leftPanel a[href*="billpay.htm"]').click();
    cy.get('input[name="payee.name"]').type("Jonatan");
    cy.get('input[name="payee.address.street"]').type("Forest Ave");
    cy.get('input[name="payee.address.city"]').type("New York");
    cy.get('input[name="payee.address.state"]').type("New York");
    cy.get('input[name="payee.address.zipCode"]').type("10310");
    cy.get('input[name="payee.phoneNumber"]').type("1-212-1234576");
    cy.get('input[name="payee.accountNumber"]').type("ACCOUNT");
    cy.get('input[name="verifyAccount"]').type("VERIFY_ACCOUNT");
    cy.get('input[name="amount"]').type("AMOUNT");
    cy.get('select[name="fromAccountId"]').select(0); // From account
    cy.get('input[type="button"]').click();
    //cy.contains("Congratulations, your loan has been approved.").should("be.visible");
  });
});
