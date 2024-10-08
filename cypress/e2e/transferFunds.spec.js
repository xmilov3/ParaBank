describe("Fund Transfer", () => {
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

  it("Should allow the user to transfer 10$ between accounts", () => {
    // Navigate to transfer funds page
    cy.xpath("//a[text()='Transfer Funds']").click();

    // Define variables for transfer
    const transferAmount = "10";
    const fromAcc = "13566";
    const toAcc = "13677";

    // Fill in the transfer form
    cy.get("#amount").type(transferAmount);
    cy.wait(2000);

    // Select the 'fromAccountId' dropdown option by value
    cy.get("select#fromAccountId").select(fromAcc); // Use select() directly

    cy.wait(2000);

    // Select the 'toAccountId' dropdown option by value
    cy.get("select#toAccountId").select(toAcc); // Use select() directly

    // Submit the transfer
    cy.get('input.button[value="Transfer"]').click();

    // Validate that the transfer was successful
    cy.get("#rightPanel").should("contain", "Transfer Complete!");

    // Log out
    cy.xpath("//a[text()='Log Out']").click();
  });
});
