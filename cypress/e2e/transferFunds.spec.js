describe("Fund Transfer", () => {
  beforeEach(() => {
    // Clearing cookies and visiting the website
    cy.clearCookies();
    cy.visit("http://localhost:8080/parabank/index.htm");
  });

  it("Should allow the user to transfer 10$ between accounts", () => {
    // Logging in to the account
    cy.get('input[name="username"]').type("john123");
    cy.get('input[name="password"]').type("zaq1@WSX");
    cy.get("input.button").contains("Log In").click();

    // Navigate to transfer funds page
    cy.xpath("//a[text()='Transfer Funds']").click();

    // Define variables for transfer
    const transferAmount = "10";
    const fromAcc = "13566";
    const toAcc = "13677";

    // Fill in the transfer form
    cy.get("#amount").type(transferAmount);
    cy.wait(2000);
    cy.get("select#fromAccountId", { timeout: 10000 }).should("be.visible");
    cy.get("select#fromAccountId").select(fromAcc);

    cy.wait(2000);

    // Be sure that it will be visible for test
    cy.get("select#toAccountId", { timeout: 10000 }).should("be.visible");
    cy.get("select#toAccountId").select(toAcc);

    // Submit the transfer
    cy.get('input.button[value="Transfer"]').click();

    // Validate that the transfer was successful
    cy.get("#rightPanel").should("contain", "Transfer Complete!");

    cy.xpath("//a[text()='Log Out']").click();
  });
});
