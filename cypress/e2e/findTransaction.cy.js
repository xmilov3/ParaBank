describe("Request Loan test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/parabank/index.htm");
    cy.get('#loginPanel input[name="username"]').type("john123");
    cy.get('#loginPanel input[name="password"]').type("John123");
    cy.get('#loginPanel input[type="submit"]').click();
  });

  it("Should request for a Loan", () => {
    cy.get('#leftPanel a[href*="findtrans.htm"]').click();
    //cy.get('input[id="transactionId"]').type("5"); // Amount to loan
    //cy.get('select[id="accountId"]').select(0); // From account
    //cy.get('input[type="button"]').click();
    cy.contains("Congratulations, your loan has been approved.").should(
      "be.visible"
    );
  });
});
