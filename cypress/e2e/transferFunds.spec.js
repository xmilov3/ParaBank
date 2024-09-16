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

    // Fill in the transfer form
    cy.get("#amount").type(transferAmount);
    cy.wait(2000);
    cy.get("select#fromAccountId").should("be.visible");
    cy.get("select#fromAccountId").select("13566");
    cy.wait(2000);
    cy.get("select#toAccountId").should("be.visible");
    cy.get("select#toAccountId").select("13677");

    // Submit the transfer
    cy.get('input.button[value="Transfer"]').click();

    // Validate that the transfer was successful
    cy.get("#rightPanel").should("contain", "Transfer Complete!");

    cy.xpath("//a[text()='Log Out']").click();
  });
});
