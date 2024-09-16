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

    // Open and select the option in the 'fromAccountId' dropdown
    cy.get("select#fromAccountId").click(); // Open dropdown
    cy.get("select#fromAccountId option")
      .contains(fromAcc)
      .then((option) => {
        cy.get("select#fromAccountId").select(option.val()); // Select option by value
      });

    cy.wait(2000);

    // Open and select the option in the 'toAccountId' dropdown
    cy.get("select#toAccountId").click(); // Open dropdown
    cy.get("select#toAccountId option")
      .contains(toAcc)
      .then((option) => {
        cy.get("select#toAccountId").select(option.val()); // Select option by value
      });

    // Submit the transfer
    cy.get('input.button[value="Transfer"]').click();

    // Validate that the transfer was successful
    cy.get("#rightPanel").should("contain", "Transfer Complete!");

    // Log out
    cy.xpath("//a[text()='Log Out']").click();
  });
});
