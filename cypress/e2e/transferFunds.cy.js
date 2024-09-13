describe("Request Loan test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/parabank/index.htm");
    cy.get('#loginPanel input[name="username"]').type("john123");
    cy.get('#loginPanel input[name="password"]').type("John123");
    cy.get('#loginPanel input[type="submit"]').click();
  });

  it("Should request for a Loan", () => {
    cy.get('#leftPanel a[href*="transfer.htm"]').click();
    cy.get('input[id="amount"]').type("5"); // Amount to loan
    cy.get('select[id="fromAccountId"]').select(0); // From account
    cy.get('select[id="toAccountId"]').select(0); // From account
    cy.get('input[type="submit"]').click();
    cy.contains("See Account Activity for more details.").should("be.visible");
  });
});
